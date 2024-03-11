import React from "react";
import Image from "next/image";
import UserPhoneIcnSvg from "@/assets/svg/AdminIconsSvg/UserPhoneIconSvg.svg";
import EditIconSvg from "@/assets/svg/AdminIconsSvg/EditIconSvg.svg";
import VerifiedBadgeSvg from "@/assets/svg/AdminIconsSvg/VerifiedBadgeSvg.svg";

import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";

import TikTokIconSvg from "@/assets/svg/AdminIconsSvg/TikTokIconSvg.svg";

const ReferralsDetails = () => {
  return (
    <section className="mt-5 bg-[#333333] p-8 rounded-2xl">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div className="relative">
            <Image src={ProfileImage} alt="profile image" />
            <Image
              src={VerifiedBadgeSvg}
              alt="VerifiedBadgeSvg"
              className="absolute bottom-0 right-2"
            />
          </div>

          <div>
            <div className="flex gap-3 items-center">
              <p className="font-bold text-3xl text-[#F7D098] mb-1">
                Christine Brooks
              </p>
              <p className="text-[#F7D098] bg-[#5D5D5D] px-3 py-1 rounded-lg">
                Top Affiliate
              </p>
            </div>

            <div className="flex justify-around gap-5 mt-2">
              {[1, 2, 3].map((item) => {
                return (
                  <div key={item}>
                    <p className="font-bold text-3xl">80</p>
                    <p className="text-[#F7D098]">Referrals</p>
                  </div>
                );
              })}

              <Image src={EditIconSvg} alt={EditIconSvg} className="self-end" />
            </div>
          </div>
        </div>

        <div>
          <p className="bg-[#00b69b48] text-[#00B69B] px-5 py-1 rounded-md font-semibold m-auto">
            Active
          </p>
        </div>
      </div>

      {/* divider */}
      <div className="border-t-2 border-[#979797] w-full my-5"></div>

      <div className="mt-5 flex gap-40">
        <div>
          <p className="font-bold text-2xl mb-2">Details</p>

          <div className="flex gap-2">
            <p className="text-[#F7D098] font-medium">Phone No:</p>
            <p className="font-semibold">09123456789</p>
          </div>
          <div className="flex gap-2">
            <p className="text-[#F7D098] font-medium">Email address:</p>
            <p className="font-semibold">brookschristine.mail.com</p>
          </div>
          <div className="flex gap-2">
            <p className="text-[#F7D098] font-medium">Referral code</p>
            <p className="font-semibold">2christB</p>
          </div>
          <div className="flex gap-2">
            <p className="text-[#F7D098] font-medium">Country:</p>
            <p className="font-semibold">Nigeria</p>
          </div>
        </div>

        <div>
          <p className="font-bold text-2xl mb-2">Affiliate Clubs</p>

          <div className="flex gap-2">
            <p className="text-[#F7D098] font-medium">Clubs: </p>
            <p className="font-semibold">Club777, Colony, O2 Arena</p>
          </div>
          <div className="flex gap-2">
            <p className="text-[#F7D098] font-medium">Bars:</p>
            <p className="font-semibold">Tit4Tat, Shandy, Xclusive</p>
          </div>
          <div className="flex gap-2">
            <p className="text-[#F7D098] font-medium">Lounges:</p>
            <p className="font-semibold">Refill</p>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="border-t-2 border-[#979797] w-full my-5"></div>

      <div className="mt-5 flex justify-between">
        <div>
          <p className="font-bold text-2xl mb-2">Marketing Channels</p>

          <div className="flex gap-3 mt-3">
            {[1, 2, 3, 4].map((item) => {
              return (
                <div
                  key={item}
                  className="bg-[#424242] p-3 rounded-xl border-2 border-[#C1C1C1]"
                >
                  <div className="flex items-center gap-2">
                    <Image src={TikTokIconSvg} alt="TikTokIconSvg" />
                    <p className="text-[#F7D098] font-semibold text-lg">
                      TikTok
                    </p>
                  </div>

                  <div className="mt-2">
                    <p>Handle: Maxx_smith</p>
                    <p>Followers: 124.6k</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-bold text-2xl mb-3">Payment Methods</p>

          <div className="flex flex-col mb-2">
            <p className="text-[#F7D098] font-medium">Crypto:</p>
            <p className="font-semibold">2kdni2920wjq1wwi20022 (Bitcoin)</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#F7D098] font-medium">Bank:</p>
            <p className="font-semibold">Christy Brooks, 123456789 (GTBank)</p>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="border-t-2 border-[#979797] w-full mt-10 mb-5"></div>

      <div>
        <p className="font-bold text-2xl mb-3">Analytics</p>
      </div>
    </section>
  );
};

export default ReferralsDetails;
