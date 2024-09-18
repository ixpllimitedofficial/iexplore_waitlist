import Image from "next/image";
import { anton } from "@/app/fonts";
import DiscJockey from "@/assets/img/MainWebsite/DiscJockey.png";

const AboutSection = () => {
  return (
    <>
      <section
        className="mb-8 flex flex-col items-center text-center gap-3 px-4 md:w-[65%] lg:w-2/4 mx-auto"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        <h1
          className={`text-gold-500 text-4xl md:text-5xl lg:text-6xl ${anton.className}`}
        >
          DIGITISING THE NIGTHLIFE ECOSYSTEM FOR ALL
        </h1>
        <p
          className="lg:text-lg text-[#D1D1D1]"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Uncover the best nightlife spot around you, Plan the perfect night out
          with friends and stay informed with all activities happening around
          you all on iexplore.
        </p>
      </section>

      <div className="relative w-full h-[300px] md:h-[450px] md:w-auto">
        <Image
          src={DiscJockey}
          alt="DiscJockey"
          className="h-full w-full object-cover"
        />
      </div>
    </>
  );
};

export default AboutSection;
