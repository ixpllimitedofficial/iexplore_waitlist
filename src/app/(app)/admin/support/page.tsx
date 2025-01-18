// import SupportCard from "@/components/admin/Support/SupportCard";

// const page = () => {
//   return (
//     <section className="mt-5">
//       <div className="grid grid-cols-4 gap-4 ">
//         {[1, 2, 3, 4, 5, 6].map((card) => {
//           return <SupportCard key={card} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default page;
import SupportCard from "@/components/admin/Support/SupportCard";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminStore } from "@/store/admin";


const page = () => {
  const isAdminLoggedin = adminStore((state) => state.isAdminLoggedin);
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to login if admin is not logged in
    if (!isAdminLoggedin) {
      router.replace("/admin-login");
    }
  }, [isAdminLoggedin, router]);

  if (!isAdminLoggedin) {
    return <p>Loading...</p>; // Optionally display a loading message
  }
  const notifications = [
    {
      id: 1,
      title: "New User Verification",
      description: "A new user has been successfully onboarded to the platform. Please proceed with monitoring their activity and engagement as needed. We’re thrilled to have you onboard! 🎊 You've just taken the first step toward [product/service benefit]. Whether you’re here to explore, learn, or grow, we’ve got exciting things in store for you. Your journey with us starts now, and we can’t wait to see what you’ll achieve!",
      status: "Completed",
      date: "12:05 AM, 12th Oct 2024",
      notificationId: "#123456",
    },
    {
      id: 2,
      title: "Bug Report",
      description: "A new user has been successfully onboarded to the platform. Please proceed with monitoring their activity and engagement as needed.We’re thrilled to have you onboard! 🎊 You've just taken the first step toward [product/service benefit]. Whether you’re here to explore, learn, or grow, we’ve got exciting things in store for you. Your journey with us starts now, and we can’t wait to see what you’ll achieve!",
      status: "Completed",
      date: "10:15 AM, 11th Oct 2024",
      notificationId: "#123457",
    },
    {
      id: 1,
      title: "New User Verification",
      description: "A new user has been successfully onboarded to the platform. Please proceed with monitoring their activity and engagement as needed. We’re thrilled to have you onboard! 🎊 You've just taken the first step toward [product/service benefit]. Whether you’re here to explore, learn, or grow, we’ve got exciting things in store for you. Your journey with us starts now, and we can’t wait to see what you’ll achieve!",
      status: "Completed",
      date: "12:05 AM, 12th Oct 2024",
      notificationId: "#123456",
    },
    {
      id: 2,
      title: "Bug Report",
      description: "A new user has been successfully onboarded to the platform. Please proceed with monitoring their activity and engagement as needed.We’re thrilled to have you onboard! 🎊 You've just taken the first step toward [product/service benefit]. Whether you’re here to explore, learn, or grow, we’ve got exciting things in store for you. Your journey with us starts now, and we can’t wait to see what you’ll achieve!",
      status: "Completed",
      date: "10:15 AM, 11th Oct 2024",
      notificationId: "#123457",
    },
    {
      id: 1,
      title: "New User Verification",
      description: "A new user has been successfully onboarded to the platform. Please proceed with monitoring their activity and engagement as needed. We’re thrilled to have you onboard! 🎊 You've just taken the first step toward [product/service benefit]. Whether you’re here to explore, learn, or grow, we’ve got exciting things in store for you. Your journey with us starts now, and we can’t wait to see what you’ll achieve!",
      status: "Completed",
      date: "12:05 AM, 12th Oct 2024",
      notificationId: "#123456",
    },
    {
      id: 2,
      title: "Bug Report",
      description: "A new user has been successfully onboarded to the platform. Please proceed with monitoring their activity and engagement as needed.We’re thrilled to have you onboard! 🎊 You've just taken the first step toward [product/service benefit]. Whether you’re here to explore, learn, or grow, we’ve got exciting things in store for you. Your journey with us starts now, and we can’t wait to see what you’ll achieve!",
      status: "Completed",
      date: "10:15 AM, 11th Oct 2024",
      notificationId: "#123457",
    },
  ];

  return (
    <section className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notifications.map((notification) => (
          <SupportCard
            key={notification.id}
            title={notification.title}
            description={notification.description}
            status={notification.status}
            date={notification.date}
            notificationId={notification.notificationId}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
