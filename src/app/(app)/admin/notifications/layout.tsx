import SendNotificationsDialog from "@/components/admin/Notifications/SendNotificationsDialog";
import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative col-span-12 lg:col-span-10 pt-28 lg:pt-6 p-6 sm:px-7">
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="self-start lg:self-center font-bold text-2xl text-white">
          Notifications
        </p>
        <ProfileCard />
      </header>

      <div className="bg-[#1A1A1A] md:bg-transparent flex flex-col md:flex-row justify-between gap-4 mt-5 p-5 rounded-md lg:items-center">
        <div className="w-full overflow-x-auto flex flex- items-center gap-4">
          {/* Active Tabs */}
          <div className="text-sm text-black bg-gold-500 px-4 py-2 rounded-full flex items-center gap-2">
            <p className="font-bold text-sm whitespace-nowrap">All Notifications (24)</p>
          </div>
          <div className="text-sm text-white border-2 border-gold-500 px-4 py-2 rounded-full flex items-center gap-2">
            <p>Read</p>
          </div>
          <div className="text-sm text-white border-2 border-gold-500 px-4 py-2 rounded-full flex items-center gap-2">
            <p>Unread</p>
          </div>
        </div>
        {/* Send Notification Dialog */}
        <SendNotificationsDialog />
      </div>

      {/* Content Section */}
      {children}
    </div>
  );
}
