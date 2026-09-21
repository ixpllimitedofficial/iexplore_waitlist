import Link from "next/link";

export default function SharedNotFound() {
  return <section className="share-card share-empty"><span className="share-eyebrow">Link unavailable</span><h1>This moment is no longer here</h1><p>The link may have expired, or the content may be private or removed.</p><Link className="share-button" href="/home">Explore iExplore</Link></section>;
}
