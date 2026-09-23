export const WEB_ORIGIN =
  process.env.NEXT_PUBLIC_WEB_ORIGIN ?? "https://www.iexploreonline.com";

export const APP_SCHEME =
  process.env.NEXT_PUBLIC_APP_SCHEME ?? "iexploreapp";

export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/ng/app/iexplore/id6752125737";

export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=com.ixpllimited.iexplore";

export const ANDROID_PACKAGE =
  process.env.NEXT_PUBLIC_ANDROID_PACKAGE ?? "com.ixpllimited.iexplore";

export type LinkEntity =
  | { type: "spot"; id: string }
  | { type: "event"; id: string }
  | { type: "profile"; username: string }
  | { type: "post"; id: string }
  | { type: "drink"; id: string }
  | { type: "reservation"; id: string }
  | { type: "live"; id?: string }
  | { type: "app" };

export function webPath(entity: LinkEntity): string {
  switch (entity.type) {
    case "spot":
      return `/spot/${encodeURIComponent(entity.id)}`;
    case "event":
      return `/event/${encodeURIComponent(entity.id)}`;
    case "profile":
      return `/profile/${encodeURIComponent(entity.username)}`;
    case "post":
      return `/feeds/${encodeURIComponent(entity.id)}`;
    case "drink":
      return `/drinks/info?id=${encodeURIComponent(entity.id)}`;
    case "reservation":
      return `/make-reservation/${encodeURIComponent(entity.id)}`;
    case "live":
      return entity.id
        ? `/feeds/live-viewer?id=${encodeURIComponent(entity.id)}`
        : `/feeds/live`;
    case "app":
      return "/";
  }
}

export function webUrl(entity: LinkEntity): string {
  return `${WEB_ORIGIN}${webPath(entity)}`;
}

export function schemePath(entity: LinkEntity): string {
  return webPath(entity).replace(/^\//, "");
}

export function schemeUrl(entity: LinkEntity): string {
  const path = webPath(entity);
  return `${APP_SCHEME}:/${path}`;
}

export function androidIntentUrl(entity: LinkEntity): string {
  const path = schemePath(entity);
  const fallback = webUrl(entity);
  return `intent://${path}#Intent;scheme=${APP_SCHEME};package=${ANDROID_PACKAGE};S.browser_fallback_url=${encodeURIComponent(fallback)};end`;
}

export function shareMessage(title: string, url: string, extra?: string) {
  const bit = extra?.trim() ? `\n${extra.trim()}` : "";
  return `${title}${bit}\n${url}`;
}
