import React from "react";
import Link from "next/link";
import Image from "next/image";
import SignOutIconSvg from "@/assets/svg/AdminIconsSvg/SignOutIconSvg.svg";
import VerifiedBadgeSvg from "@/assets/svg/AdminIconsSvg/VerifiedBadgeSvg.svg";
import ProfileImage from "@/assets/img/AdminPageImages/ProfileImage.png";
import AppButton from "@/components/UI/Button/AppButton";
import { Badge } from "@/components/UI/badge";
import AppInput from "@/components/UI/Inputs/AppInput";

const ProfileDetails = () => {
  return (
    <>
      <div className="mt-5 grid grid-cols-6 gap-4">
        <div className="flex flex-col items-center gap-3 col-span-full md:col-span-3 lg:col-span-2">
          <div className="flex items-center bg-brandDarkNeutral p-4 rounded-2xl w-full gap-3">
            <div className="relative">
              <Image src={ProfileImage} alt="profile image" height={100} />
              <Image
                src={VerifiedBadgeSvg}
                alt="VerifiedBadgeSvg"
                className="absolute bottom-0 right-1"
              />
            </div>

            <div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl text-gold-500">Anita Cruzzi</p>
                <p className="text-gold-500 text-xs bg-[#5D5D5D] px-3 py-1 self-start rounded-lg">
                  Admin
                </p>
                <Badge className="self-start bg-[#00b69b48] text-[#00B69B] text-xs">
                  Active
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* user details */}
        <div className="col-span-full md:col-span-3 lg:col-span-2">
          <div className="flex flex-col gap-3 bg-brandDarkNeutral p-4 rounded-2xl">
            <p className="font-bold text-lg text-gold-500">Details:</p>

            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm">Phone No:</p>
                <p className="font-semibold text-sm text-gold-500">
                  09123456789
                </p>
              </div>

              <div>
                <p className="text-sm">Email Address:</p>
                <p className="font-semibold text-sm text-gold-500">
                  brookschristine.mail.com
                </p>
              </div>

              <div>
                <p className="text-sm">Country:</p>
                <p className="font-semibold text-sm text-gold-500">Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* business details */}
        <div className="hidden lg:col-span-2"></div>
      </div>

      <div className="mt-5 lg:mt-8 bg-brandDarkNeutral p-5 lg:p-8 rounded-2xl">
        <div className="grid grid-cols-2 gap-10">
          {/* edit profile */}
          <div className="col-span-full md:col-span-1">
            <p className="text-gold-500 text-lg font-bold">Profile details</p>

            <div className="mt-3 flex flex-col gap-3">
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
            <p className="text-gold-500 text-lg font-bold">Change Password</p>

            <div className="mt-3 flex flex-col gap-3">
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
      </div>

      <Link href="/admin" className="flex justify-center mt-5">
        <AppButton
          leftIcon={SignOutIconSvg}
          btnText="Sign Out"
          className="text-sm"
        />
      </Link>
    </>
  );
};

export default ProfileDetails;
