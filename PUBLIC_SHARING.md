# Shared content pages

Routes: `/spots/<uuid>`, `/posts/<uuid>`, `/live/<uuid>`. They use the new backend public endpoints and do not require login to read. The existing 18+ age gate remains in place. Share uses the native share sheet where available and a copy-link fallback otherwise.

## Configuration

Set server-side environment variables:

```dotenv
PUBLIC_CONTENT_API_URL=https://your-backend.example/api/v1
# Vercel only, or another header your trusted ingress overwrites:
PUBLIC_PROXY_CLIENT_IP_HEADER=x-vercel-forwarded-for
```

`PUBLIC_CONTENT_API_URL` must point to the backend with the public-sharing changes and migration deployed. There is no fallback to the old hardcoded API. Configure backend `PUBLIC_WEB_URL` to this site's public origin so the returned canonical links land here.

Only configure `PUBLIC_PROXY_CLIENT_IP_HEADER` when the hosting platform overwrites that header. Vercel's header contract is documented in [request headers](https://vercel.com/docs/headers/request-headers). Without this variable, the API sees the web server's IP and visitors share its anonymous rate limit. Configure the backend ingress to preserve the trusted client identity and remove spoofed headers from direct traffic. Apply rate limits at the website edge for login and watch requests.

The site reads public content without caching it. Open Graph and Twitter metadata use the same public response. Pages are marked `noindex`; link sharing does not enable search indexing. Missing/private/expired content renders an unavailable page. Backend failures show a retry page instead. Next may return HTTP 200 for a streamed not-found page; its metadata remains `noindex`, and the API returns 404.

## Login and interaction

The `/api/shared/[...path]` handler forwards only the listed login, public watch and interaction routes. Mutations require a matching Origin. The backend access token is held in an HttpOnly, Secure-in-production, SameSite=Strict session cookie and is not returned to JavaScript. No refresh token is retained. An expired token prompts login again, then resumes the requested action. Sign-out removes the website session cookie. Account creation and recovery remain in the app.

Visitors can save spots, toggle post likes and submit feed or live comments after login. This is a lightweight shared-content viewer, not the full explorer account application. Native mobile share controls and app association files remain separate integration work.

## Livestreams

Agora loads only when Watch live is clicked. The player joins as audience, subscribes to remote tracks and never opens a camera or microphone. Audience credentials last five minutes and renew against the backend's signed guest session. Stop or navigation leaves the channel. The Enable sound control handles browsers that suppress initial audio playback.

Guest playback is available only when the backend reports `guest_playback_enabled`. Enable Agora co-host token authentication before setting `AGORA_GUEST_PLAYBACK_ENABLED=True` on the backend. An ended stream shows its ended state without offering a replay.

## Checks

```sh
npm run build
npm run test:sharing
```

The smoke test launches the production Next server and a local mock API, checks page metadata, unavailable content, login cookies, cross-origin rejection, the forwarding allowlist and authenticated actions, then stops both servers. It does not contact a production backend. For browser QA, run `node scripts/test-public-sharing.mjs --serve`; the command prints fixture URLs and test login credentials. Use `SHARING_TEST_PORT` to override port 3109.

Before release, test real Agora video and audio in a staging host/guest pair, token renewal, stopping a live broadcast and privacy changes. The local mock cannot prove third-party media delivery or project-level Agora permissions.
