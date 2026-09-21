"use client";

export default function SharedError({ reset }: { reset: () => void }) {
  return <section className="share-card share-empty"><h1>We could not load this page</h1><p>Please try again in a moment.</p><button className="share-button" onClick={reset}>Try again</button></section>;
}
