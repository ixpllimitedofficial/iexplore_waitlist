import React from "react";
import Image from "next/image";
import SignOutIconSvg from "@/assets/svg/AdminIconsSvg/SignOutIconSvg.svg";
import ToggleOffSvg from "@/assets/svg/AdminIconsSvg/ToggleOffSvg.svg";
import ToggleOnSvg from "@/assets/svg/AdminIconsSvg/ToggleOnSvg.svg";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Divider from "@/components/UI/Divider";
import Link from "next/link";

const page = () => {
  return (
    <section className="mt-5 bg-[#333333] p-5 rounded-2xl">
      <div className="">
        <p className="font-bold text-xl text-gold-500 mb-2">Account settings</p>

        {/* divider */}
        <Divider />

        <div className="mt-5 grid grid-cols-2 gap-5 md:gap-10">
          {/* edit profile */}
          <div className="col-span-full md:col-span-1">
            <p className="text-gold-500 font-bold">Edit profile</p>

            <div className="mt-2 flex flex-col gap-3">
              <AppInput
                value=""
                type="text"
                name="name"
                label="Name:"
                placeholder="Anita Cruz"
                labelClassName="text-white"
              />

              <AppInput
                value=""
                type="email"
                name="email"
                label="Email:"
                placeholder="anitacruz@gmail.com"
                labelClassName="text-white"
              />

              <AppInput
                value=""
                type="text"
                name="number"
                label="Phone Number:"
                placeholder="09123456789"
                labelClassName="text-white"
              />
            </div>
          </div>

          {/* change password */}
          <div className="col-span-full md:col-span-1">
            <p className="text-gold-500 font-bold">Change Password</p>

            <div className="mt-2 flex flex-col gap-3">
              <AppInput
                value=""
                type="password"
                name="currentPassword"
                label="Current Password:"
                labelClassName="text-white"
              />

              <AppInput
                value=""
                type="password"
                name="newPassword"
                label="New Password:"
                labelClassName="text-white"
              />

              <AppInput
                value=""
                type="password"
                name="confirmPassword"
                label="Confirm Password:"
                labelClassName="text-white"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 mb-5 flex flex-col gap-3 lg:w-[50%] mx-auto">
          <p className="text-gold-500 font-bold">Appearance settings</p>

          <div className="flex justify-between items-center w-full border-[1px] border-[#424242] p-3 rounded-xl">
            <p className="text-sm">Push Notification</p>
            <Image src={ToggleOffSvg} alt="ToggleOffSvg" />
          </div>

          <div className="flex justify-between items-center w-full border-[1px] border-[#424242] p-3 rounded-xl">
            <p className="text-sm">Dark Mode</p>
            <Image src={ToggleOnSvg} alt="ToggleOnSvg" />
          </div>
        </div>
      </div>

      <Link href="/admin" className="flex justify-center">
        <AppButton
          leftIcon={SignOutIconSvg}
          btnText="Sign Out"
          className="text-sm"
        />
      </Link>
    </section>
  );
};

export default page;
