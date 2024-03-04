import React from "react";
import Image from "next/image";
import UserMailIcon from "@/assets/svg/AdminIconsSvg/UserMailIconSvg.svg";
import UserPhoneIcnSvg from "@/assets/svg/AdminIconsSvg/UserPhoneIconSvg.svg";

const UserDetails = () => {
  return (
    <section className="mt-5 bg-[#333333] p-8 rounded-2xl">
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-3xl text-[#F7D098] mb-1">
            Christine Brooks
          </p>
          <p>04 Sep 1973</p>
        </div>

        <div>
          <p className="bg-[#00b69b48] text-[#00B69B] px-5 py-1 rounded-md font-semibold m-auto">
            Active
          </p>
        </div>
      </div>

      <div className="mt-5">
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

      {/* divider */}
      <div className="border-t-2 border-[#979797] w-full my-5"></div>

      <div className="mt-5">
        <p className="font-bold text-2xl text-[#F7D098] mb-2">Preference</p>

        <div className="flex gap-3 mt-3">
          <p className="border-2 border-[#F7D098] px-4 py-2 rounded-2xl">Bar</p>
          <p className="border-2 border-[#F7D098] px-4 py-2 rounded-2xl">
            Club
          </p>
          <p className="border-2 border-[#F7D098] px-4 py-2 rounded-2xl">
            Beach
          </p>
          <p className="border-2 border-[#F7D098] px-4 py-2 rounded-2xl">
            Lounge
          </p>
          <p className="border-2 border-[#F7D098] px-4 py-2 rounded-2xl">
            Hotel
          </p>
        </div>
      </div>

      {/* divider */}
      <div className="border-t-2 border-[#979797] w-full mt-10 mb-5"></div>

      <div className="mt-5 flex justify-between gap-20">
        <div>
          <p className="font-bold text-2xl text-[#F7D098] mb-2">Interactions</p>

          <div className="flex flex-wrap gap-6 mt-3">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
              return (
                <p key={item} className="">
                  Club {item}
                </p>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-bold text-2xl text-[#F7D098] mb-2">
            Interactions(Events)
          </p>

          <div className="flex flex-wrap gap-8 mt-3">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
              return (
                <p key={item} className="">
                  Club {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-5"
      >
        <path
          d="M13.5 16L10.725 12.3C10.5917 12.1222 10.5917 11.8778 10.725 11.7L13.5 8"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="12" r="10" stroke="white" stroke-width="1.5" />
      </svg>
    </section>
  );
};

export default UserDetails;
