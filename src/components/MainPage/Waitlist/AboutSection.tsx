import Image from "next/image";
import { anton } from "@/app/fonts";
import DiscJockey from "@/assets/img/MainWebsite/DiscJockey.png";

const AboutSection = () => {
  return (
    <>
      <section className="my-20 flex flex-col items-center text-center gap-3 w-2/4 mx-auto">
        <h1 className={`text-gold-500 text-6xl ${anton.className}`}>
          DIGITISING THE NIGTHLIFE ECOSYSTEM FOR ALL
        </h1>
        <p className="text-lg text-[#D1D1D1]">
          Uncover the best nightlife spot around you, Plan the perfect night out
          with friends and stay informed with all activities happening around
          you all on iexplore.
        </p>
      </section>

      <Image src={DiscJockey} alt="DiscJockey" />
    </>
  );
};

export default AboutSection;
