import OpenInApp from "@/components/OpenInApp";

export default async function SpotLinkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <OpenInApp
      entity={{ type: "spot", id }}
      title="Open this spot"
      subtitle="See hours, reviews, and directions in the iExplore app."
    />
  );
}
