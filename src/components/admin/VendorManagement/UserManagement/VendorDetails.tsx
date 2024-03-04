import React from "react";
import Image from "next/image";
import UserMailIcon from "@/assets/svg/AdminIconsSvg/UserMailIconSvg.svg";
import UserPhoneIcnSvg from "@/assets/svg/AdminIconsSvg/UserPhoneIconSvg.svg";
import AppButton from "@/components/UI/Button/AppButton";

const VendorDetails = () => {
  return (
    <section className="mt-5 bg-[#333333] p-8 rounded-2xl">
      <p className="font-bold text-3xl text-[#F7D098]">Details submitted</p>

      {/* divider */}
      <div className="border-t-2 border-[#979797] w-full mt-5 mb-8"></div>

      <div className="flex justify-between">
        <div>
          <p className="font-bold text-3xl text-[#F7D098] mb-1">
            Christine Brooks
          </p>
          <p>04 Sep 1973</p>
        </div>

        <div>
          <p className="bg-[#ffec4348] text-[#FFEC43] px-5 py-1 rounded-md font-semibold m-auto">
            Pending
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-20">
        <div>
          <p className="font-bold text-2xl text-[#F7D098] mb-2">Details</p>

          <div className="flex gap-2">
            <Image src={UserMailIcon} alt="user mail icon" />
            <p>09123456789</p>
          </div>
          <div className="flex gap-2">
            <Image src={UserPhoneIcnSvg} alt="user phone icon" />
            <p>brookschristine.mail.com</p>
          </div>
        </div>

        <div>
          <p className="font-bold text-2xl text-[#F7D098] mb-2">
            Business Details
          </p>

          <div className="flex gap-2">
            <Image src={UserMailIcon} alt="user mail icon" />
            <p>Club 777</p>
          </div>
          <div className="flex gap-2">
            <Image src={UserPhoneIcnSvg} alt="user phone icon" />
            <p>21, Mokola Road, VI Lekki, Lagos State.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <AppButton className="font-semibold " btnText="Approve" />
      </div>
    </section>
  );
};

export default VendorDetails;
