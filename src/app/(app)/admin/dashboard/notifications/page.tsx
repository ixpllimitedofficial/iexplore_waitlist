import Image from "next/image";
import MoreIconSvg from "@/assets/svg/AdminIconsSvg/MoreIconSvg.svg";
import NotificationCard from "@/components/admin/Notifications/NotificationCard";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";

const page = () => {
  return (
    <section className="grid grid-cols-5 gap-10 mt-5">
      <div className="col-span-3">
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((card) => {
            return <NotificationCard key={card} />;
          })}
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-3">
        <div className="bg-[#333333] p-4 border-2 border-[#F7D098] rounded-2xl flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-[#F7D098]">
              Targeted notification
            </p>

            <Image src={MoreIconSvg} alt="MoreIconSvg" />
          </div>
          <p className="text-[#999999]">3 of 8 remaining</p>
        </div>

        <div className="bg-[#333333] p-4 border-2 border-[#F7D098] rounded-2xl flex flex-col gap-5">
          <p className="font-bold text-lg text-[#F7D098]">Activities</p>

          {[1, 2, 3].map((card) => {
            return (
              <div className="flex gap-2" key={card}>
                <Image
                  src={ProfileImage}
                  alt="ProfileImage"
                  className="h-[40px] w-auto"
                />

                <div>
                  <p className="text-lg">Released a new user.</p>
                  <p className="text-[#999999]">59 minutes ago</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
