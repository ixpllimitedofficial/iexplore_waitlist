import Image from "next/image";
import ProfileLocationIcon from "@/assets/svg/UserIconsSvg/ProfileLocationIcon.svg";
import ProfileDrinksIcon from "@/assets/svg/UserIconsSvg/ProfileDrinksIcon.svg";
import ProfileFeedbackIcon from "@/assets/svg/UserIconsSvg/ProfileFeedbackIcon.svg";
import ProfileFAQsIcon from "@/assets/svg/UserIconsSvg/ProfileFAQsIcon.svg";
import ProfileCallIcon from "@/assets/svg/UserIconsSvg/ProfileCallIcon.svg";
import ProfilePolicyIcon from "@/assets/svg/UserIconsSvg/ProfilePolicyIcon.svg";
import ProfileLogoutIcon from "@/assets/svg/UserIconsSvg/ProfileLogoutIcon.svg";

import NextRightArrowIcon from "@/assets/svg/UserIconsSvg/NextRightArrowIcon.svg";

import { Button } from "@/components/UI/button";

const ProfileSections = () => {
  return (
    <section className="mt-10">
      {/* saved */}
      <div>
        <div className="bg-[#4D4D4D33] px-5 py-3 text-gold-500 text-lg">
          Saved
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-[#4D4D4D33] flex justify-between mt-5 px-5 py-6 rounded-2xl">
            <div>
              <Image src={ProfileLocationIcon} alt="ProfileLocationIcon" />
              <p className="text-xl mt-2">Locations</p>
            </div>

            <div>
              <Image src={NextRightArrowIcon} alt="NextRightArrowIcon" />
            </div>
          </div>

          <div className="bg-[#4D4D4D33] flex justify-between mt-5 px-5 py-6 rounded-2xl">
            <div>
              <Image src={ProfileDrinksIcon} alt="ProfileDrinksIcon" />
              <p className="text-xl mt-2">Drinks</p>
            </div>

            <div>
              <Image src={NextRightArrowIcon} alt="NextRightArrowIcon" />
            </div>
          </div>
        </div>
      </div>

      {/* feedback */}
      <div className="mt-10">
        <div className="bg-[#4D4D4D33] px-5 py-3 text-gold-500 text-lg">
          Feedback
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-[#4D4D4D33] flex justify-between mt-5 px-5 py-6 rounded-2xl">
            <div>
              <Image src={ProfileFeedbackIcon} alt="ProfileFeedbackIcon" />
              <p className="text-xl mt-2">Feedback</p>
            </div>

            <div>
              <Image src={NextRightArrowIcon} alt="NextRightArrowIcon" />
            </div>
          </div>

          <div className="bg-[#4D4D4D33] flex justify-between mt-5 px-5 py-6 rounded-2xl">
            <div>
              <Image src={ProfileFAQsIcon} alt="ProfileFAQsIcon" />
              <p className="text-xl mt-2">FAQs</p>
            </div>

            <div>
              <Image src={NextRightArrowIcon} alt="NextRightArrowIcon" />
            </div>
          </div>

          <div className="bg-[#4D4D4D33] flex justify-between mt-5 px-5 py-6 rounded-2xl">
            <div>
              <Image src={ProfileCallIcon} alt="ProfileCallIcon" />
              <p className="text-xl mt-2">Call Support</p>
            </div>

            <div>
              <Image src={NextRightArrowIcon} alt="NextRightArrowIcon" />
            </div>
          </div>
        </div>
      </div>

      {/* saved */}
      <div className="mt-10">
        <div className="bg-[#4D4D4D33] px-5 py-3 text-gold-500 text-lg">
          Saved
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-[#4D4D4D33] flex justify-between mt-5 px-5 py-6 rounded-2xl">
            <div>
              <Image src={ProfileFeedbackIcon} alt="ProfileFeedbackIcon" />
              <p className="text-xl mt-2">Terms of use</p>
            </div>

            <div>
              <Image src={NextRightArrowIcon} alt="NextRightArrowIcon" />
            </div>
          </div>

          <div className="bg-[#4D4D4D33] flex justify-between mt-5 px-5 py-6 rounded-2xl">
            <div>
              <Image src={ProfilePolicyIcon} alt="ProfilePolicyIcon" />
              <p className="text-xl mt-2">Privacy Policy</p>
            </div>

            <div>
              <Image src={NextRightArrowIcon} alt="NextRightArrowIcon" />
            </div>
          </div>
        </div>
      </div>

      <Button className="bg-gold-500 hover:bg-gold-600 text-brandDark transition duration-200 px-7 py-5 rounded-3xl font-bold mt-10">
        <Image src={ProfileLogoutIcon} alt="ProfileLogoutIcon" />
        <p className="ml-1">Logout</p>
      </Button>
    </section>
  );
};

export default ProfileSections;
