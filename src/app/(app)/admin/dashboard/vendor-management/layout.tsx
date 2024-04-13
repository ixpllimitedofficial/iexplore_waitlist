import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="self-start lg:self-center font-bold text-2xl lg:text-[28px]">
          Vendor Management
        </p>

        <ProfileCard />
      </header>

      <div className="grid grid-cols-6 gap-4 mt-5">
        <div className="col-span-3 lg:col-span-1 bg-[#333333] p-5 rounded-2xl">
          TOTAL VENDORS
        </div>
        <div className="col-span-3 lg:col-span-1 bg-[#333333] p-5 rounded-2xl">
          NEW VENDORS
        </div>
        <div className="col-span-3 lg:col-span-1 bg-[#333333] p-5 rounded-2xl">
          ACTIVE VENDORS
        </div>
      </div>

      {children}
    </>
  );
}
