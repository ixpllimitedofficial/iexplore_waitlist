import { cache } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export type ContentKind = "spots" | "posts" | "live";
export type PublicContent = {
  id: string; share_url: string; name?: string; title?: string; caption?: string;
  description?: string; category?: string; full_address?: string; website?: string;
  opening_time?: string; closing_time?: string; entry_type?: string;
  cover_image?: string; thumbnail_url?: string; expires_at?: string;
  status?: "created" | "live" | "ended"; guest_playback_enabled?: boolean;
  user?: { username: string; first_name: string; profile_picture_url?: string };
  media?: { id: string; media_type: string; media_url: string; thumbnail_url?: string }[];
  images?: { id: string; image_url?: string; image?: string }[];
};

export function apiBase() {
  const value = process.env.PUBLIC_CONTENT_API_URL;
  if (!value) throw new Error("PUBLIC_CONTENT_API_URL is required for shared pages");
  return value.replace(/\/$/, "");
}

export const getPublicContent = cache(async (kind: ContentKind, id: string): Promise<PublicContent | null> => {
  if (!/^[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}$/i.test(id)) return null;
  const ipHeader = process.env.PUBLIC_PROXY_CLIENT_IP_HEADER;
  const clientIp = ipHeader ? (await headers()).get(ipHeader) : null;
  const response = await fetch(`${apiBase()}/public/${kind}/${id}/`, {
    cache: "no-store", signal: AbortSignal.timeout(10000),
    headers: clientIp ? { "X-Forwarded-For": clientIp } : {},
  });
  if (response.status === 404 || response.status === 410) return null;
  if (!response.ok) throw new Error("Shared content is temporarily unavailable");
  return response.json();
});

export function contentTitle(content: PublicContent, kind: ContentKind) {
  return content.name || content.title || (kind === "posts" ? `A moment from @${content.user?.username || "iExplore"}` : "Live on iExplore");
}

export async function publicMetadata(kind: ContentKind, id: string): Promise<Metadata> {
  const content = await getPublicContent(kind, id);
  if (!content) notFound();
  const title = `${contentTitle(content, kind)} | iExplore`;
  const description = (content.description || content.caption || "Discover places and moments on iExplore.").slice(0, 180);
  const image = content.cover_image || content.thumbnail_url || content.media?.[0]?.thumbnail_url || (content.media?.[0]?.media_type === "image" ? content.media[0].media_url : undefined);
  return {
    title, description, alternates: { canonical: content.share_url },
    // Shared content is accessible by link; search discovery is a separate decision.
    robots: { index: false, follow: false },
    openGraph: { title, description, url: content.share_url, siteName: "iExplore", type: "website", images: image ? [{ url: image }] : [] },
    twitter: { card: image ? "summary_large_image" : "summary", title, description, images: image ? [image] : [] },
  };
}
