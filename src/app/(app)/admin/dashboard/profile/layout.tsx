
import ProfileCard from "@/components/UI/AdminUI/ProfileCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-between">
        <p className="font-bold text-[28px]">Profile</p>

        <ProfileCard />
      </header>

      {children}
    </>
  );
}
