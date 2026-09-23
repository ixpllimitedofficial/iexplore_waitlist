import OpenInApp from "@/components/OpenInApp";

export default async function ProfileLinkPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return (
    <OpenInApp
      entity={{ type: "profile", username }}
      title={`@${username}`}
      subtitle="Open this profile in the iExplore app."
    />
  );
}
