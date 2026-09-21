"use client";

import { useEffect, useRef, useState } from "react";
import type { IAgoraRTCClient } from "agora-rtc-sdk-ng";

type AudienceToken = { app_id: string; channel_name: string; uid: number; rtc_token: string; guest_session: string };

export default function GuestPlayer({ id }: { id: string }) {
  const video = useRef<HTMLDivElement>(null);
  const client = useRef<IAgoraRTCClient | null>(null);
  const session = useRef<string | undefined>(undefined);
  const attempt = useRef(0);
  const [state, setState] = useState<"idle" | "joining" | "watching">("idle");
  const [error, setError] = useState("");

  async function credentials(): Promise<AudienceToken> {
    const response = await fetch(`/api/shared/public/live/${id}/watch`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guest_session: session.current }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || data.message || "Unable to start playback.");
    return data;
  }

  async function stop() {
    attempt.current += 1;
    const current = client.current; client.current = null;
    current?.removeAllListeners();
    current?.remoteUsers.forEach(user => { user.videoTrack?.stop(); user.audioTrack?.stop(); });
    await current?.leave().catch(() => {});
    session.current = undefined;
    setState("idle");
  }

  useEffect(() => () => {
    attempt.current += 1;
    const current = client.current; client.current = null;
    current?.removeAllListeners();
    current?.remoteUsers.forEach(user => { user.videoTrack?.stop(); user.audioTrack?.stop(); });
    void current?.leave().catch(() => {});
  }, []);

  async function watch() {
    setState("joining"); setError("");
    const currentAttempt = ++attempt.current;
    let rtc: IAgoraRTCClient | undefined;
    try {
      const [AgoraRTC, token] = await Promise.all([import("agora-rtc-sdk-ng").then(module => module.default), credentials()]);
      if (attempt.current !== currentAttempt) return;
      session.current = token.guest_session;
      rtc = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
      const current = rtc;
      client.current = current;
      current.on("user-published", async (user, mediaType) => {
        try {
          await current.subscribe(user, mediaType);
          if (client.current !== current) return;
          if (mediaType === "video" && video.current) user.videoTrack?.play(video.current);
          if (mediaType === "audio") user.audioTrack?.play();
        } catch { setError("Playback was interrupted. Stop and try again."); }
      });
      current.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "video") user.videoTrack?.stop();
        if (mediaType === "audio") user.audioTrack?.stop();
      });
      current.on("token-privilege-will-expire", async () => {
        try {
          const renewed = await credentials();
          if (client.current === current) { session.current = renewed.guest_session; await current.renewToken(renewed.rtc_token); }
        } catch (failure) {
          if (client.current !== current) return;
          await stop(); setError(failure instanceof Error ? failure.message : "The stream is no longer available.");
        }
      });
      current.on("token-privilege-did-expire", async () => { await stop(); setError("Your viewing session expired. Tap Watch live to reconnect."); });
      await current.setClientRole("audience");
      await current.join(token.app_id, token.channel_name, token.rtc_token, token.uid);
      if (attempt.current !== currentAttempt) { await current.leave(); return; }
      setState("watching");
    } catch (failure) {
      rtc?.removeAllListeners(); await rtc?.leave().catch(() => {});
      if (attempt.current !== currentAttempt) return;
      client.current = null; session.current = undefined; setState("idle");
      setError(failure instanceof Error ? failure.message : "Unable to start playback.");
    }
  }

  return <section aria-label="Livestream player">
    <div ref={video} className="share-player"><span>Live from iExplore</span></div>
    <div className="share-actions">
      {state === "idle" ? <button className="share-button" onClick={watch}>Watch live</button> : <button className="share-button share-secondary" onClick={stop}>{state === "joining" ? "Cancel" : "Stop watching"}</button>}
      {state === "watching" && <button className="share-text-button" onClick={() => client.current?.remoteUsers.forEach(user => user.audioTrack?.play())}>Enable sound</button>}
    </div>
    <p className="share-muted" role="status">{state === "joining" ? "Connecting to the stream…" : error}</p>
  </section>;
}
