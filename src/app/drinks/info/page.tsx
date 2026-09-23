import OpenInApp from "@/components/OpenInApp";

export default async function DrinkLinkPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return (
    <OpenInApp
      entity={{ type: "drink", id: id || "" }}
      title="Open this drink"
      subtitle="Claim or view it in the iExplore app."
    />
  );
}
