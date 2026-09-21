"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function ExpiringPost({ expiresAt, children }: { expiresAt?: string; children: ReactNode }) {
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    if (!expiresAt) return;
    const remaining = new Date(expiresAt).getTime() - Date.now();
    if (remaining <= 0) { setExpired(true); return; }
    const timer = setTimeout(() => setExpired(true), Math.min(remaining, 2147483647));
    return () => clearTimeout(timer);
  }, [expiresAt]);
  return expired ? <section className="share-card share-empty"><h1>This moment has expired</h1><p>Posts are available for 24 hours after they are shared.</p></section> : children;
}
