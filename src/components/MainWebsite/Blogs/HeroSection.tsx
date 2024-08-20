import Image from "next/image";
import BlogsBgImg from "@/assets/img/MainWebsite/BlogsBgImg.png";
import NightclubPhoto from "@/assets/img/MainWebsite/NightclubPhoto.jpg";
import BlogAdmin from "@/assets/img/MainWebsite/BlogAdmin.png";

import { anton } from "@/app/fonts";

const HeroSection = () => {
  return (
    <article className="flex flex-col gap-5">
      <Image src={BlogsBgImg} alt="BlogsBgImg" className="w-full h-auto mt-5" />

      <div className="px-3 flex flex-col gap-5">
        <p className="text-xl md:text-3xl font-bold">
          Top Events for you in Lagos this weekend
        </p>

        <div className="flex items-center gap-2">
          <Image src={BlogAdmin} alt="BlogAdmin" className="" />
          <p>By Maxx Admin</p>|<p>August 1, 2024</p>
        </div>

        <div>
          <p className="text-xl">
            It’s needless to state that a lot is happening this weekend in
            Lagos, maybe not in the typical Weekender fashion, but a Lagosian
            can’t be surprised. Regardless, it’s left to us to find a balance
            and try to enjoy the little time we have before going back to
            dealing with capitalism, and we have just the guide for that.
          </p>
          <p className="text-xl mt-3">
            You should always make some time to have fun and you are living in
            the right city to get the most fun. Our e-guide will help you
            explore all the fun experiences in Lagos this year. You can also
            click here to have your event featured on the weekend list for free!
            Here are the events happening this weekend in Lagos:
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[90%] md:w-3/4 mx-auto">
        <h1 className={`text-3xl md:text-5xl ${anton.className}`}>
          Karaoke on the Rooftop
        </h1>
        <div className="h-[200px] md:h-[450px] w-full">
          <Image
            src={NightclubPhoto}
            alt="NightclubPhoto"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl">
          Get ready to unleash your inner star! Karaoke on the Safron Rooftop is
          now happening every Thursday. Gather your friends, pick your favorite
          songs, and sing your heart out under the stars. <br /> Time: 6 PM{" "}
          <br />
          Venue: Safron Hotel, 57 Joel Ogunnaike, Ikeja GRA
        </p>
      </div>
    </article>
  );
};

export default HeroSection;
