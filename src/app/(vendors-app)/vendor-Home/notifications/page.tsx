import React from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import NotificationTabs from "@/components/vendor-components/NotificationCard/NotificationTabs/page";

const Page = () => {
  return (
    <section className="">
      <Header title="Notifications" className="hidden md:block" />

      {/*Notification cards */}
      <div className="mt-20 md:mt-0 mx-2 md:mx-5">
        <NotificationTabs />
      </div>
    </section>
  );
};

export default Page;
