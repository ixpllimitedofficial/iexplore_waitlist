import Image from "next/image";
import StarIcon from "@/assets/svg/SpotDetailsSvg/StarIconSvg.svg";

const SpotRatings = () => {
  return (
    <section className="my-20 flex items-center justify-around">
      {/* text */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-7xl text-[#E1BD8A]">4.8</h1>
          <Image src={StarIcon} alt="StarIcon" />
        </div>
        <p className="text-2xl text-[#E1BD8A]">(2,109 Raters)</p>
      </div>

      {/* text */}
      <div className="flex flex-col gap-5">
        <div className="bg-[#424242] w-[600px] p-2 rounded-full"></div>
        <div className="bg-[#424242] w-[600px] p-2 rounded-full"></div>
        <div className="bg-[#424242] w-[600px] p-2 rounded-full"></div>
        <div className="bg-[#424242] w-[600px] p-2 rounded-full"></div>
        <div className="bg-[#424242] w-[600px] p-2 rounded-full"></div>
      </div>
    </section>
  );
};

export default SpotRatings;
