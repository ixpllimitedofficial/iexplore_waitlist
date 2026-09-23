"use client";

import { useMemo, useState } from "react";
import {
  APP_STORE_URL,
  LinkEntity,
  PLAY_STORE_URL,
  schemeUrl,
} from "@/lib/links";

function isAndroid() {
  if (typeof navigator === "undefined") return false;
  return /android/i.test(navigator.userAgent);
}

function isIOS() {
  if (typeof navigator === "undefined") return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

export default function OpenInApp({
  entity,
  title,
  subtitle,
}: {
  entity: LinkEntity;
  title: string;
  subtitle?: string;
}) {
  const [tried, setTried] = useState(false);
  const appHref = useMemo(() => schemeUrl(entity), [entity]);

  const openApp = () => {
    setTried(true);
    window.location.href = appHref;
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-gold-500/40 bg-[#120f08] p-8 text-center">
        <p className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-3">
          iExplore
        </p>
        <h1 className="text-2xl font-bold mb-3">{title}</h1>
        <p className="text-zinc-400 text-sm mb-8">
          {subtitle || "Open this in the iExplore app for the full experience."}
        </p>

        <button
          onClick={openApp}
          className="w-full h-12 rounded-2xl bg-[#382D16] border border-gold-500 font-semibold mb-3"
        >
          {tried ? "Trying to open the app…" : "Open in iExplore"}
        </button>

        {isIOS() && (
          <a
            href={APP_STORE_URL}
            className="block w-full h-12 rounded-2xl bg-white text-black font-semibold leading-12 mb-3"
          >
            Download on the App Store
          </a>
        )}

        {isAndroid() && (
          <a
            href={PLAY_STORE_URL}
            className="block w-full h-12 rounded-2xl bg-white text-black font-semibold leading-12 mb-3"
          >
            Get it on Google Play
          </a>
        )}

        {!isIOS() && !isAndroid() && (
          <div className="grid grid-cols-1 gap-3">
            <a
              href={APP_STORE_URL}
              className="h-12 rounded-2xl bg-white text-black font-semibold leading-12"
            >
              App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              className="h-12 rounded-2xl border border-white/20 font-semibold leading-12"
            >
              Google Play
            </a>
          </div>
        )}
      </div>
    </div>
  );
}