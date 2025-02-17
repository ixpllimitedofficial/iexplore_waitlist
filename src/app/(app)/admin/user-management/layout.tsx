import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative col-span-12 lg:col-span-10 pt-16 lg:pt-6 p-6 sm:px-5 ">
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="hidden lg:flex self-start lg:self-center font-bold text-2xl">
          User Management
        </p>

        <ProfileCard />
      </header>

      {children}
    </div>
  );
}
