import React from "react";
import Image from "next/image";
import SignOutIconSvg from "@/assets/svg/AdminIconsSvg/SignOutIconSvg.svg";
import VerifiedBadgeSvg from "@/assets/svg/AdminIconsSvg/VerifiedBadgeSvg.svg";
import ProfileImage from "@/assets/img/AdminPageImages/ProfileImage.png";
import AppButton from "@/components/UI/Button/AppButton";
import Link from "next/link";

const ProfileDetails = () => {
  return (
    <section className="mt-5 bg-[#333333] p-5 lg:p-8 rounded-2xl">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="relative">
            <Image src={ProfileImage} alt="profile image" />
            <Image
              src={VerifiedBadgeSvg}
              alt="VerifiedBadgeSvg"
              className="absolute bottom-0 right-2"
            />
          </div>

          <div>
            <div className="flex flex-col lg:flex-row gap-3 items-center">
              <p className="font-bold text-xl text-gold-500 mb-1">Anita Cruz</p>
              <p className="text-gold-500 bg-[#5D5D5D] px-3 py-1 rounded-lg text-sm">
                Admin
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 lg:mt-0 self-center lg:self-start">
          <p className="bg-[#00b69b48] text-[#00B69B] px-5 py-1 rounded-md font-semibold m-auto text-center">
            Active
          </p>
        </div>
      </div>

      {/* divider */}
      <div className="border-t-2 border-[#979797] w-full my-5"></div>

      <div className="mt-5">
        <p className="font-bold text-xl mb-2">Details</p>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p className="text-gold-500 font-medium">Phone No:</p>
            <p className="font-semibold">09123456789</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gold-500 font-medium">
              Email address:{" "}
              <span className="text-white font-semibold">
                brookschristine.mail.com
              </span>{" "}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-gold-500 font-medium">Country:</p>
            <p className="font-semibold">Nigeria</p>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="border-t-2 border-[#979797] w-full my-5"></div>

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

export default ProfileDetails;
