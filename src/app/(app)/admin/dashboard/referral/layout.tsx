import AddAffliateDialog from "@/components/admin/ReferralManagement/AddAffliateDialog";
import ProfileCard from "@/components/UI/AdminUI/ProfileCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="self-start lg:self-center font-bold text-2xl lg:text-[28px]">
          Referral Management
        </p>

        <ProfileCard />
      </header>

      <div className="grid grid-cols-4 gap-4 mt-5 items-center">
        <div className="col-span-2 lg:col-span-1 bg-[#333333] p-5 rounded-2xl">
          TOTAL AFFLIATES
        </div>
        <div className="col-span-2 lg:col-span-1 bg-[#333333] p-5 rounded-2xl">
          NEW REFERRAL
        </div>
        <div className="col-span-2 lg:col-span-1 bg-[#333333] p-5 rounded-2xl">
          ACTIVE AFFLIATES
        </div>

        <AddAffliateDialog />
      </div>

      {children}
    </>
  );
}
