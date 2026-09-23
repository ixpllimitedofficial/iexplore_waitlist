import OpenInApp from "@/components/OpenInApp";

async function getPost(id: string) {
  const res = await fetch(
    `https://apiv1.iexploreonline.com/api/v1/feeds/posts/${id}/`,
    { cache: "no-store" },
  );
  if (!res.ok) return null;
  const json = await res.json();
  return json?.data ?? json;
}

export default async function PostLinkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  const name = post?.user?.username || "someone";

  return (
    <OpenInApp
      entity={{ type: "post", id }}
      title={post ? `Moment by @${name}` : "Open this moment"}
      subtitle={post?.caption || "Watch it in the iExplore app."}
    />
  );
}