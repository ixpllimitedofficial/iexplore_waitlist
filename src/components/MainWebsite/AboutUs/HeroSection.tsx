import Image from "next/image";
import AboutUsImage1 from "@/assets/img/MainWebsite/AboutUsImage1.png";
import AboutUsImage2 from "@/assets/img/MainWebsite/AboutUsImage2.png";

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-2 gap-10 pt-5">
      <div className="col-span-full lg:col-span-1 text-lg md:text-xl text-[#F6F6F6] text-center md:text-start flex flex-col gap-5">
        <p>
          We are a dynamic and innovative mobile application with root in the
          nightlife experience market. The brand is born out of passion and the
          desire to redefine the way we experience the nightlife industry in
          Africa.{" "}
        </p>
        <p>
          Our brand pillars offer cutting edge solutions that will elevate the
          nights experience. With iexplore, explorers are exposed to a new and
          seamless perspective to discovering and connecting with the best
          nightlife spot in the city.{" "}
        </p>
        <Image
          src={AboutUsImage1}
          alt="AboutUsImage1"
          className="lg:hidden relative top-0 left-0 w-full h-auto"
        />
        <p>
          {" "}
          We are more than an application, we are your personal connection to
          the best and happening places in your city. We empower you to
          accomplish more, connect deeper and experience life to its fullest.
        </p>
      </div>

      <div className="relative col-span-full lg:col-span-1">
        {/* image 1 */}
        <Image
          src={AboutUsImage1}
          alt="AboutUsImage1"
          className="hidden lg:block lg:w-[350px]"
        />

        {/* image 2 */}
        <Image
          src={AboutUsImage2}
          alt="AboutUsImage2"
          className="w-full lg:w-[350px] lg:absolute lg:bottom-0 lg:right-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;
