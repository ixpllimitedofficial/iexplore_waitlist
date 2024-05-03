import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import VerifiedBadgeSvg from "@/assets/svg/AdminIconsSvg/VerifiedBadgeSvg.svg";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import TikTokIconSvg from "@/assets/svg/AdminIconsSvg/TikTokIconSvg.svg";
import DownloadIcon from "@/assets/svg/AdminIconsSvg/DownloadIcon.svg";

const ReferralsDetails = () => {
  return (
    <>
      {/* vendor details */}
      <div className="mt-5 grid grid-cols-6 gap-4">
        <div className="flex flex-col items-center gap-3 col-span-2">
          <div className="flex items-center bg-[#333333] p-4 rounded-2xl w-full gap-3">
            <div className="relative">
              <Image src={ProfileImage} alt="profile image" height={100} />
              <Image
                src={VerifiedBadgeSvg}
                alt="VerifiedBadgeSvg"
                className="absolute bottom-0 right-1"
              />
            </div>

            <div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-2xl text-gold-500">
                  Christine Brooks
                </p>
                <p className="text-gold-500 text-xs bg-[#5D5D5D] px-3 py-1 self-start rounded-lg">
                  Top Affiliate
                </p>
              </div>

              <div className="flex justify-around gap-5 mt-2">
                <div className="text-center lg:text-start">
                  <p className="font-bold text-xl">80</p>
                  <p className="text-gold-500 text-xs">Referrals</p>
                </div>

                <div className="text-center lg:text-start">
                  <p className="font-bold text-xl">78%</p>
                  <p className="text-gold-500 text-xs">Conversion</p>
                </div>

                <div className="text-center lg:text-start">
                  <p className="font-bold text-xl">7</p>
                  <p className="text-gold-500 text-xs">Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* user details */}
        <div className="col-span-2">
          <div className="flex flex-col gap-3 bg-[#333333] p-4 rounded-2xl">
            <p className="font-bold text-lg text-gold-500">Details:</p>

            <div className="flex flex-wrap gap-5">
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
                <p className="text-sm">Referral code:</p>
                <p className="font-semibold text-sm text-gold-500">2christB</p>
              </div>

              <div>
                <p className="text-sm">Country:</p>
                <p className="font-semibold text-sm text-gold-500">Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* business details */}
        <div className="col-span-2">
          <div className="flex flex-col gap-3 bg-[#333333] p-4 rounded-2xl">
            <p className="font-bold text-lg text-gold-500">Affiliate Clubs:</p>

            <div className="flex flex-col gap-2">
              <div>
                <p className="text-sm">Clubs:</p>
                <p className="font-semibold text-sm text-gold-500">
                  Club777, Colony, O2 Arena
                </p>
              </div>

              <div>
                <p className="text-sm">Bars:</p>
                <p className="font-semibold text-sm text-gold-500">
                  Tit4Tat, Shandy, Xclusive
                </p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-sm">Lounges:</p>
                  <p className="font-semibold text-sm text-gold-500">Refill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-[#333333] p-5 rounded-2xl">
        <div className="flex flex-col  justify-between">
          <div>
            <p className="font-bold text-xl mb-2">Marketing Channels</p>

            <div className="grid grid-cols-4 gap-3 mt-3">
              {[1, 2, 3, 4].map((item) => {
                return (
                  <div
                    key={item}
                    className="bg-[#424242] col-span-full md:col-span-2 lg:col-span-1 p-3 rounded-xl border-2 border-[#C1C1C1]"
                  >
                    <div className="flex items-center gap-1">
                      <Image src={TikTokIconSvg} alt="TikTokIconSvg" />
                      <p className="text-gold-500 font-semibold text-lg">
                        TikTok
                      </p>
                    </div>

                    <div className="mt-1 text-sm">
                      <p>Handle: Maxx_smith</p>
                      <p>Followers: 124.6k</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-[#333333] p-5 rounded-2xl">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl text-gold-500">Analytics</p>

          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-auto bg-gold-500 text-[#212121] border-none focus-visible:ring-0">
                <SelectValue placeholder="This week" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
              </SelectContent>
            </Select>

            <Image src={DownloadIcon} alt="download" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralsDetails;
