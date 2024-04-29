import SendNotificationsDialog from "@/components/admin/Notifications/SendNotificationsDialog";
import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="self-start lg:self-center font-bold text-2xl">
          Notifications
        </p>

        <ProfileCard />
      </header>

      <div className="flex flex-col lg:flex-row justify-between gap-4 mt-5 lg:items-center">
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-[#F7D098] text-sm bg-[#887254] p-3 rounded-xl flex items-center gap-2">
            <p className="font-bold">All Notifications</p>
            <p className="bg-[#FF7300] text-white px-2 rounded-full">
              4
            </p>
          </div>

          <div className="text-[#F7D098] text-sm flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">Completed</p>
            <p className="bg-[#0DDA15] text-white px-2 rounded-full">
              4
            </p>
          </div>

          <div className="text-[#F7D098] text-sm flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">In progress</p>
            <p className="bg-[#FF7300] text-white px-2 rounded-full">
              4
            </p>
          </div>

          <div className="text-[#F7D098] text-sm flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">Pending</p>
            <p className="bg-[#BE2424] text-white px-2 rounded-full">
              4
            </p>
          </div>

          <div className="text-[#F7D098] text-sm flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">Read</p>
            <p className="bg-[#0DDA15] text-white px-2 rounded-full">
              4
            </p>
          </div>

          <div className="text-[#F7D098] text-sm flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">Unread</p>
            <p className="bg-[#C4C4C4] text-white px-2 rounded-full">
              4
            </p>
          </div>
        </div>

        <SendNotificationsDialog />
      </div>

      {children}
    </>
  );
}
