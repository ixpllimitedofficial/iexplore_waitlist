/* eslint-disable @next/next/no-img-element -- Public media loads directly so the Next image cache does not retain withdrawn content. */
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock3 } from "lucide-react";
import { contentTitle, getPublicContent, type ContentKind } from "@/lib/public-content";
import ShareButton from "./ShareButton";
import Interactions from "./Interactions";
import GuestPlayer from "./GuestPlayer";
import ExpiringPost from "./ExpiringPost";

export default async function SharedPage({ kind, id }: { kind: ContentKind; id: string }) {
  const content = await getPublicContent(kind, id);
  if (!content) notFound();
  const title = contentTitle(content, kind);
  return <ExpiringPost expiresAt={content.expires_at}><article className="share-card">
    <div className="share-heading">
      <span className="share-eyebrow">{kind === "spots" ? content.category || "Explore a spot" : kind === "posts" ? "A moment worth sharing" : content.status === "live" ? "● Live now" : content.status === "ended" ? "Stream ended" : "Coming up"}</span>
      <h1>{title}</h1>
      {content.user && <p className="share-muted">@{content.user.username}</p>}
      <ShareButton title={title} url={content.share_url} />
    </div>
    {kind === "spots" && <>
      {content.cover_image && <img className="share-hero" src={content.cover_image} alt={content.name || "Spot"} />}
      <div className="share-details">
        <p className="share-description">{content.description}</p>
        {content.full_address && <p className="share-fact"><MapPin size={20} />{content.full_address}</p>}
        {content.opening_time && content.closing_time && <p className="share-fact"><Clock3 size={20} />{content.opening_time.slice(0, 5)} to {content.closing_time.slice(0, 5)}</p>}
        {content.entry_type && <p className="share-muted">Entry: {content.entry_type}</p>}
        {content.website && /^https?:\/\//i.test(content.website) && <a className="share-text-button" href={content.website} target="_blank" rel="noopener noreferrer">Visit website ↗</a>}
        {!!content.images?.length && <div className="share-gallery">{content.images.map(image => {
          const url = image.image_url || image.image;
          return url ? <img key={image.id} src={url} alt={`${content.name} photo`} loading="lazy" /> : null;
        })}</div>}
      </div>
    </>}
    {kind === "posts" && <div className="share-details">
      <div className="share-media">{content.media?.map(media => media.media_type === "video" ? <video key={media.id} controls playsInline preload="metadata" poster={media.thumbnail_url} src={media.media_url} /> : <img key={media.id} src={media.media_url} alt={content.caption || "Shared moment"} />)}</div>
      <p className="share-description">{content.caption}</p>
      <p className="share-muted">This moment is available for 24 hours after it was posted.</p>
    </div>}
    {kind === "live" && <div className="share-details">
      {content.guest_playback_enabled ? <GuestPlayer id={id} /> : <>
        {content.thumbnail_url && <img className="share-hero" src={content.thumbnail_url} alt="Livestream preview" />}
        <p className="share-description">{content.status === "ended" ? "This livestream has ended. A replay is not available." : content.status === "created" ? "The broadcast has not started yet." : "Live viewing on the web is currently unavailable. You can watch in the iExplore app."}</p>
      </>}
    </div>}
    {(kind !== "live" || content.status === "live") && <Interactions kind={kind} id={id} />}
    <footer className="share-card-footer"><Link href="/home">Discover iExplore</Link><Link href="/legal/community-guidelines">Community guidelines</Link></footer>
  </article></ExpiringPost>;
}
