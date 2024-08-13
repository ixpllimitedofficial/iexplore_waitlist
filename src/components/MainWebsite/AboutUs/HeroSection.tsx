import Image from "next/image";

import AboutUsImage1 from "@/assets/img/MainWebsite/AboutUsImage1.png";
import AboutUsImage2 from "@/assets/img/MainWebsite/AboutUsImage2.png";

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-2 gap-10 pt-5">
      <p className="col-span-full md:col-span-1 text-xl text-[#F6F6F6]">
        We are a dynamic and innovative mobile application with root in the
        nightlife experience market. The brand is born out of passion and the
        desire to redefine the way we experience the nightlife industry in
        Africa. <br /> <br /> Our brand pillars offer cutting edge solutions
        that will elevate the night’s experience. Explorers are exposed to a new
        and seamless perspective to discovering, enjoying and connecting with
        the best nightlife spots In their city. <br /> <br /> We are more than
        an application, We are your personal connection to the best and
        happening places in your city. We are committed to empowering you to
        accomplish more, connect deeper and experience life to the fullest…
        <br /> <br /> Everyday, Explorers get to go on exciting adventures as
        they discover new destinations where they can connect and enjoy the
        night out with friends.
      </p>

      <div className="relative col-span-full md:col-span-1">
        {/* image 1 */}
        <Image
          src={AboutUsImage1}
          alt="AboutUsImage1"
          className="relative top-0 left-0"
        />

        {/* image 2 */}
        <Image
          src={AboutUsImage2}
          alt="AboutUsImage2"
          className="absolute bottom-0 right-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;
