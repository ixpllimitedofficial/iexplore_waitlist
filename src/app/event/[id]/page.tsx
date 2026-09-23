import OpenInApp from "@/components/OpenInApp";

export default async function EventLinkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <OpenInApp
      entity={{ type: "event", id }}
      title="Open this event"
      subtitle="View the event details in the iExplore app."
    />
  );
}
