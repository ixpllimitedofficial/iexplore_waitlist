import Image from "next/image";
import { Button } from "@/components/UI/button";
import ProfileImage from "@/assets/img/UserWebappImages/ProfileImage.png";
import ToggleIcon from "@/assets/svg/UserIconsSvg/ToggleIcon.svg";

const ProfileDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:pr-20">
      <div className="flex flex-wrap items-center justify-between gap-7">
        <div>
          <Image src={ProfileImage} alt="profile image" />
          <p className="text-2xl font-bold mt-2">Maxx Smith</p>
          <p className="text-[#B0B0B0] text-lg">@maxxs</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <Button className="bg-[#4D4D4D66] hover:bg-[#4d4d4dab] transition duration-200 px-7 py-5 rounded-3xl text-lg">
            Edit profile
          </Button>

          <Button className="bg-gold-500 hover:bg-gold-600 text-brandDark transition duration-200 px-7 py-5 rounded-3xl font-bold text-lg">
            Share app
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 mt-5 lg:gap-12">
        <div>
          <p className="text-xl">Following</p>
          <p className="text-gold-500 text-3xl font-bold mt-2">100</p>
        </div>

        <div>
          <p className="text-xl">Followers</p>
          <p className="text-gold-500 text-3xl font-bold mt-2">203</p>
        </div>

        <div>
          <p className="text-xl">Notifications</p>
          <Image src={ToggleIcon} alt="ToggleIcon" className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
