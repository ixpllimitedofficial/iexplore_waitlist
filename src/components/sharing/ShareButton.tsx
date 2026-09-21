"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

export default function ShareButton({ url, title }: { url: string; title: string }) {
  const [message, setMessage] = useState("");
  const [copyManually, setCopyManually] = useState(false);
  async function share() {
    setMessage("");
    try {
      if (navigator.share) await navigator.share({ title, url });
      else { await navigator.clipboard.writeText(url); setMessage("Link copied"); }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      setCopyManually(true);
      setMessage("Copy this link to share");
    }
  }
  return <div>
    <button className="share-button share-secondary" onClick={share}><Share2 size={18} />Share</button>
    <span className="share-feedback" role="status">{message}</span>
    {copyManually && <input aria-label="Share link" className="share-input" value={url} readOnly onFocus={event => event.target.select()} />}
  </div>;
}
