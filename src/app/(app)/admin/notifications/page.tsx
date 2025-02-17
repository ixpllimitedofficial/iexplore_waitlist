import NotificationCard from "@/components/admin/Notifications/NotificationCard";

const page = () => {
  // Sample notification data
  const notifications = [
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
      id: 2,
      title: "New User Verification",
      description: "A new user has been successfully onboarded...",
      status: "Pending",
      date: "12:05 AM, 12th Oct 2024",
      notificationId: "#123457",
    },
    {
      id: 2,
      title: "New User Verification",
      description: "A new user has been successfully onboarded...",
      status: "Completed",
      date: "12:05 AM, 12th Oct 2024",
      notificationId: "#123457",
    },
  ];

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

export default page;
