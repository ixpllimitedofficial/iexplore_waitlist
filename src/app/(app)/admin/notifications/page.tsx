import Image from "next/image";
import MoreIconSvg from "@/assets/svg/AdminIconsSvg/MoreIconSvg.svg";
import NotificationCard from "@/components/admin/Notifications/NotificationCard";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";

const page = () => {
  return (
    <section className="grid grid-cols-5 gap-10 mt-5">
      <div className="col-span-full lg:col-span-3">
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((card) => {
            return <NotificationCard key={card} />;
          })}
        </div>
      </div>

      <div className="col-span-full lg:col-span-2 flex flex-col gap-3">
        <div className="bg-[#333333] p-4 border-2 border-gold-500 rounded-2xl flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="font-bold text-gold-500">Targeted notification</p>

            <Image src={MoreIconSvg} alt="MoreIconSvg" />
          </div>
          <p className="text-[#999999] text-sm">0 of 0 remaining</p>
        </div>

        <div className="bg-[#333333] p-4 border-2 border-gold-500 rounded-2xl flex flex-col gap-3">
          <p className="font-bold text-gold-500">Activities</p>

          {[1, 2, 3].map((card) => {
            return (
              <div className="flex gap-2" key={card}>
                <Image
                  src={ProfileImage}
                  alt="ProfileImage"
                  className="h-[35px] w-auto"
                />

                <div>
                  <p className="text-sm">Released a new user.</p>
                  <p className="text-[#999999] text-sm">59 minutes ago</p>
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
