import React from "react";
import Image from "next/image";
import UserMailIcon from "@/assets/svg/AdminIconsSvg/UserMailIconSvg.svg";
import UserPhoneIcnSvg from "@/assets/svg/AdminIconsSvg/UserPhoneIconSvg.svg";
import AppButton from "@/components/UI/Button/AppButton";
import Divider from "@/components/UI/Divider";

const VendorDetails = () => {
  return (
    <section className="mt-5 bg-[#333333] p-5 lg:p-8 rounded-2xl">
      <p className="font-bold text-2xl text-[#F7D098]">Details submitted</p>

      {/* divider */}
      <Divider />

      <div className="flex justify-between">
        <div>
          <p className="font-bold text-2xl text-[#F7D098] mb-1">
            Christine Brooks
          </p>
          <p>04 Sep 1973</p>
        </div>

        <div>
          <p className="bg-[#ffec4348] text-[#FFEC43] px-3 lg:px-5 py-1 rounded-md font-semibold m-auto text-sm lg:text-base">
            Pending
          </p>
        </div>
      </div>

      {/* divider */}
      <Divider />

      <div className="mt-5 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div>
          <p className="font-bold text-2xl text-[#F7D098] mb-2">Details</p>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image src={UserMailIcon} alt="user mail icon" />
              <p>09123456789</p>
            </div>
            <div className="flex gap-2">
              <Image src={UserPhoneIcnSvg} alt="user phone icon" />
              <p>brookschristine.mail.com</p>
            </div>
          </div>
        </div>

      {/* divider */}
      <Divider className="block lg:hidden" />

        <div>
          <p className="font-bold text-2xl text-[#F7D098] mb-2">
            Business Details
          </p>

          <div className="flex flex-col gap-2">
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
      </div>

      <div className="flex justify-center mt-14">
        <AppButton className="font-semibold " btnText="Approve" />
      </div>
    </section>
  );
};

export default VendorDetails;
