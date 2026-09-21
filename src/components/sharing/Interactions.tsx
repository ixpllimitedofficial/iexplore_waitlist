"use client";

import { FormEvent, useRef, useState } from "react";
import type { ContentKind } from "@/lib/public-content";

async function send(path: string, body: object) {
  const response = await fetch(`/api/shared/${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const data = await response.json();
  return { status: response.status, ok: response.ok, message: data.message || data.detail || "Please try again." };
}

export default function Interactions({ kind, id }: { kind: ContentKind; id: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const pending = useRef<{ path: string; body: object } | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const [comment, setComment] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  async function perform(path: string, body: object) {
    setBusy(true); setMessage("");
    try {
      const result = await send(path, body);
      if (result.status === 401) {
        pending.current = { path, body }; setSignedIn(false); setLoginError(""); dialog.current?.showModal();
      } else {
        setMessage(result.message);
        if (result.ok) { setSignedIn(true); if ("content" in body) setComment(""); }
      }
    } catch { setMessage("Unable to connect. Please try again."); }
    finally { setBusy(false); }
  }

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setLoginError("");
    const form = new FormData(event.currentTarget);
    try {
      const result = await send("auth/login", { email_or_username: form.get("email"), password: form.get("password") });
      if (!result.ok) { setLoginError(result.message); return; }
      const action = pending.current; pending.current = null;
      setSignedIn(true); dialog.current?.close();
      if (action) await perform(action.path, action.body);
    } catch { setLoginError("Unable to sign in. Please try again."); }
    finally { setBusy(false); }
  }

  return <section className="share-interactions" aria-label="Interact on iExplore">
    <p className="share-muted">Enjoy looking around. Sign in when you want to join in.</p>
    {kind === "spots" && <button disabled={busy} className="share-button" onClick={() => perform("spots/favorites/add", { spot: id })}>Save this spot</button>}
    {kind === "posts" && <button disabled={busy} className="share-button" onClick={() => perform("feeds/posts/interact/like", { post: id })}>Like / unlike</button>}
    {kind !== "spots" && <form className="share-comment" onSubmit={event => {
      event.preventDefault();
      perform(kind === "posts" ? "feeds/comments/create" : `live-streams/streams/${id}/comments`, kind === "posts" ? { post: id, content: comment } : { content: comment });
    }}>
      <label htmlFor="shared-comment">{kind === "live" ? "Join the live conversation" : "Leave a comment"}</label>
      <textarea id="shared-comment" className="share-input" required maxLength={500} value={comment} onChange={event => setComment(event.target.value)} placeholder="What do you think?" />
      <button className="share-button share-secondary" disabled={busy || !comment.trim()} type="submit">Send comment</button>
    </form>}
    <p role="status" className="share-feedback">{message}</p>
    {signedIn && <button className="share-text-button" disabled={busy} onClick={async () => {
      setBusy(true);
      try { const result = await send("auth/logout", {}); if (result.ok) { setSignedIn(false); setMessage("Signed out."); } else setMessage(result.message); }
      catch { setMessage("Unable to sign out. Please try again."); }
      finally { setBusy(false); }
    }}>Sign out</button>}
    <dialog ref={dialog} className="share-dialog" onClose={() => { pending.current = null; }}>
      <form onSubmit={login}>
        <button type="button" className="share-dialog-close" aria-label="Close sign-in" onClick={() => dialog.current?.close()}>×</button>
        <h2>Join in with iExplore</h2>
        <p>Sign in with your iExplore account to continue.</p>
        <label htmlFor="share-email">Email or username</label>
        <input id="share-email" className="share-input" name="email" autoComplete="username" required />
        <label htmlFor="share-password">Password</label>
        <input id="share-password" className="share-input" name="password" type="password" autoComplete="current-password" required />
        <p role="alert">{loginError}</p>
        <button className="share-button" disabled={busy} type="submit">{busy ? "Signing in…" : "Sign in and continue"}</button>
      </form>
    </dialog>
  </section>;
}
