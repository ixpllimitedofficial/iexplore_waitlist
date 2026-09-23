import OpenInApp from "@/components/OpenInApp";

export default async function FeedLinkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <OpenInApp
      entity={{ type: "post", id }}
      title="Open this moment"
      subtitle="Watch it in the iExplore app."
    />
  );
}
