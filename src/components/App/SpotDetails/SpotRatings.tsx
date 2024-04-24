import Image from "next/image";
import StarIcon from "@/assets/svg/SpotDetailsSvg/StarIconSvg.svg";

const SpotRatings = () => {
  return (
    <section className="my-20 flex flex-col md:flex-row items-center md:justify-between gap-10 px-5 lg:px-24">
      {/* text */}
      <div className="flex flex-col items-center w-[80vw] md:w-auto gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-5xl text-[#E1BD8A]">4.8</h1>
          <Image src={StarIcon} alt="StarIcon" height={30} />
        </div>
        <p className="text-lg text-[#E1BD8A]">(2,109 Raters)</p>
      </div>

      {/* text */}
      <div className="flex flex-col gap-5 w-[90vw] md:w-[70%] lg:w-[50%]">
        <div className="bg-[#424242] w-full p-2 rounded-full"></div>
        <div className="bg-[#424242] w-full p-2 rounded-full"></div>
        <div className="bg-[#424242] w-full p-2 rounded-full"></div>
        <div className="bg-[#424242] w-full p-2 rounded-full"></div>
        <div className="bg-[#424242] w-full p-2 rounded-full"></div>
      </div>
    </section>
  );
};

export default SpotRatings;
