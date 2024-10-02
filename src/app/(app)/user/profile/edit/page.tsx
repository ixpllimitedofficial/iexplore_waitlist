import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/UI/button";
import ProfileImage from "@/assets/img/UserWebappImages/ProfileImage.png";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import EditProfileForm from "@/components/user/ProfileRoute/EditProfileForm";

const page = () => {
  return (
    <section className="px-10 pb-5">
      <div className="flex items-center">
        <Link href="/user/profile">
          <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
        </Link>

        <div className="flex justify-center items-center gap-3 w-full">
          <p className=" font-bold text-3xl">Edit Profile</p>
        </div>
      </div>

      {/*  */}
      <div className="mt-5 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <Image src={ProfileImage} alt="profile image" />
            <p className="text-2xl font-bold mt-2">Maxx Smith</p>
            <p className="text-[#B0B0B0] text-lg">@maxxs</p>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <Button className="bg-[#4D4D4D66] hover:bg-[#4d4d4dab] transition duration-200 px-7 py-5 rounded-3xl text-lg">
              Edit photo
            </Button>
          </div>
        </div>
      </div>

      {/* form */}
      <EditProfileForm />
    </section>
  );
};

export default page;
