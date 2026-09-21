// Exercises the built Next server against an isolated API fixture.
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { once } from "node:events";

const id = "11111111-1111-4111-8111-111111111111";
const expiredId = "22222222-2222-4222-8222-222222222222";
const unavailableId = "33333333-3333-4333-8333-333333333333";
const webPort = Number(process.env.SHARING_TEST_PORT || 3109);
const origin = `http://127.0.0.1:${webPort}`;
const requests = [];
const api = createServer(async (req, res) => {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : {};
  requests.push({ path: req.url, authorization: req.headers.authorization, forwarded: req.headers["x-forwarded-for"], body });
  res.setHeader("Content-Type", "application/json");
  const respond = (status, value) => { res.statusCode = status; res.end(JSON.stringify(value)); };
  if (req.url.includes(expiredId)) return respond(404, { detail: "Not found" });
  if (req.url.includes(unavailableId)) return respond(503, { detail: "Unavailable" });
  if (req.url.endsWith("/auth/login/")) {
    if (body.password !== "test-password") return respond(400, { message: "Incorrect password." });
    return respond(200, { data: { access_token: "test-access", refresh_token: "test-refresh" } });
  }
  if (req.url.endsWith("/watch/")) return respond(503, { detail: "Guest playback is not enabled." });
  if (req.method === "POST") {
    if (req.headers.authorization !== "Bearer test-access") return respond(401, { message: "Sign in again." });
    return respond(201, { message: "Saved successfully." });
  }
  const kind = req.url.split("/")[4];
  respond(200, {
    id, share_url: `${origin}/${kind}/${id}`, name: kind === "spots" ? "The Lagos Terrace" : undefined,
    title: kind === "live" ? "Sunset on the terrace" : undefined,
    category: "Lounge", description: "A rooftop gathering place with a view across Lagos.", full_address: "12 Marina, Lagos",
    caption: "A moment above the city.", status: "ended", guest_playback_enabled: false,
    user: { username: "ade", first_name: "Ade" }, images: [], media: [],
    expires_at: kind === "posts" ? new Date(Date.now() + 3600000).toISOString() : undefined,
  });
});
api.listen(0, "127.0.0.1");
await once(api, "listening");
const apiPort = api.address().port;
const next = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(webPort)], {
  env: { ...process.env, PUBLIC_CONTENT_API_URL: `http://127.0.0.1:${apiPort}/api/v1`, PUBLIC_PROXY_CLIENT_IP_HEADER: "x-test-client-ip" },
  stdio: ["ignore", "pipe", "pipe"],
});
let logs = "";
next.stdout.on("data", chunk => { logs += chunk; });
next.stderr.on("data", chunk => { logs += chunk; });
const close = () => { next.kill("SIGTERM"); api.close(); };
process.on("SIGINT", () => { close(); process.exit(0); });
process.on("SIGTERM", () => { close(); process.exit(0); });
const post = (path, body = {}, extra = {}) => fetch(`${origin}/api/shared/${path}`, {
  method: "POST", headers: { "Content-Type": "application/json", Origin: origin, ...extra }, body: JSON.stringify(body),
});
try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try { await fetch(`${origin}/icon.svg`); ready = true; break; } catch { await new Promise(resolve => setTimeout(resolve, 250)); }
  }
  assert.ok(ready, logs);
  for (const kind of ["spots", "posts", "live"]) {
    const result = await fetch(`${origin}/${kind}/${id}`, { headers: { "User-Agent": "facebookexternalhit/1.1", "x-test-client-ip": "192.0.2.10" } });
    assert.equal(result.status, 200);
    const html = await result.text();
    assert.ok(html.includes('property="og:title"'));
    assert.ok(html.includes(`${origin}/${kind}/${id}`));
    assert.ok(!html.includes("test-access"));
    assert.match(result.headers.get("cache-control"), /no-store|private/);
  }
  assert.ok(requests.some(req => req.forwarded === "192.0.2.10"));
  for (const path of [`/posts/${expiredId}`, "/spots/not-a-uuid"]) {
    const missing = await fetch(`${origin}${path}`, { headers: { "User-Agent": "facebookexternalhit/1.1" } });
    // Next can already have started a streamed response when notFound runs.
    assert.ok([200, 404].includes(missing.status));
    const html = await missing.text();
    assert.match(html, /noindex/);
    assert.match(html, /This moment is no longer here|NEXT_HTTP_ERROR_FALLBACK;404/);
    assert.ok(!html.includes('property="og:title"'));
  }
  assert.equal((await post("spots/favorites/add", { spot: id })).status, 401);
  assert.equal((await post("auth/login", {}, { Origin: "https://untrusted.example" })).status, 403);
  assert.equal((await post("admin/users/delete", {})).status, 404);
  assert.equal((await post("auth/login", { password: "incorrect" })).status, 400);
  const login = await post("auth/login", { email_or_username: "ade", password: "test-password" });
  assert.equal(login.status, 200);
  const cookie = login.headers.get("set-cookie");
  assert.match(cookie, /HttpOnly/i); assert.match(cookie, /SameSite=strict/i); assert.match(cookie, /Secure/i);
  assert.ok(!(await login.text()).includes("test-access"));
  assert.equal((await post("spots/favorites/add", { spot: id }, { Cookie: cookie.split(";")[0] })).status, 201);
  assert.equal(requests.at(-1).authorization, "Bearer test-access");
  assert.equal((await post(`public/live/${id}/watch`)).status, 503);
  const logout = await post("auth/logout");
  assert.match(logout.headers.get("set-cookie"), /expires=Thu, 01 Jan 1970/i);
  console.log("PASS: shared pages, metadata, unavailable links, private caching, login cookie, origin checks, route allowlist and authenticated actions");
  if (process.argv.includes("--serve")) {
    console.log(`UI fixtures: ${origin}/spots/${id} (login: ade / test-password)`);
    console.log(`Ended stream: ${origin}/live/${id}; missing: ${origin}/posts/${expiredId}; error: ${origin}/spots/${unavailableId}`);
    await new Promise(() => {});
  }
} catch (error) {
  console.error(error); console.error(logs); process.exitCode = 1;
} finally { close(); }
