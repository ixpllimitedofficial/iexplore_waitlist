'use client'

import NotificationCard from "@/components/admin/Notifications/NotificationCard";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminStore } from "@/store/admin";

interface Notification {
  id: number;
  title: string;
  description: string;
  status: string;
  date: string;
  notificationId: string;
}

const Page = () => {
  const isAdminLoggedin = adminStore((state) => state.isAdminLoggedin);
  const router = useRouter();

  const notifications: Notification[] = [
    {
      id: 1,
      title: "New User Verification",
      description: "A new user has been successfully onboarded...",
      status: "Completed",
      date: "12:05 AM, 12th Oct 2024",
      notificationId: "#123456",
    },
    {
      id: 2,
      title: "New User Verification",
      description: "A new user has been successfully onboarded...",
      status: "Completed",
      date: "12:05 AM, 12th Oct 2024",
      notificationId: "#123457",
    },
    {
      id: 3,
      title: "New User Verification",
      description: "A new user has been successfully onboarded...",
      status: "Pending",
      date: "12:05 AM, 12th Oct 2024",
      notificationId: "#123458",
    },
    {
      id: 4,
      title: "New User Verification",
      description: "A new user has been successfully onboarded...",
      status: "Completed",
      date: "12:05 AM, 12th Oct 2024",
      notificationId: "#123459",
    },
  ];

  useEffect(() => {
    // Redirect to login if admin is not logged in
    if (!isAdminLoggedin) {
      router.replace("/admin-login");
    }
  }, [isAdminLoggedin, router]);

  if (!isAdminLoggedin) {
    return <p>Loading...</p>; 
  }

  return (
    <section className="grid grid-cols-1 gap-10 mt-5">
      <div className="col-span-full">
        <div className="flex flex-col gap-4">
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              title={notification.title}
              description={notification.description}
              status={notification.status}
              date={notification.date}
              notificationId={notification.notificationId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
