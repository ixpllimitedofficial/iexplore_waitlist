import LocationIcon from "@/assets/svg/SpotDetailsSvg/LocationIconSvg.svg";
import TelephoneIconSvg from "@/assets/svg/SpotDetailsSvg/TelephoneIconSvg.svg";
import TimeIconSvg from "@/assets/svg/SpotDetailsSvg/TimeIconSvg.svg";
import WebsiteIconSvg from "@/assets/svg/SpotDetailsSvg/WebsiteIconSvg.svg";
import Image from "next/image";

const Details = () => {
  return (
    <>
      {/* divider */}
      <div className="my-8 border-t-2 border-[#F9D9AD] flex-grow"></div>

      {/* details */}
      <section className="flex flex-col flex-gap gap-10">
        {/* location */}
        <div className="flex gap-5">
          <Image src={LocationIcon} alt="LocationIcon" height={35} />
          <p className="text-xl md:text-[22px]">
            873 Ozumba Mbadiwe Ave, Victoria Island <br /> 106104, Lagos state.
            Nigeria.
          </p>
        </div>

        {/* time */}
        <div className="flex gap-5">
          <Image src={TimeIconSvg} alt="TimeIconSvg" height={35} />
          <p className="text-xl md:text-[22px]">01 924 4386</p>
        </div>

        {/* time */}
        <div className="flex gap-5">
          <Image src={TelephoneIconSvg} alt="TimeIconSvg" height={35} />
          <p className="text-xl md:text-[22px]">
            Open time: 6:00am <br /> Close time: 6:00pm
          </p>
        </div>

        {/* time */}
        <div className="flex gap-5">
          <Image src={WebsiteIconSvg} alt="WebsiteIconSvg" height={35} />
          <p className="text-xl md:text-[22px]">www.clubquilox.com</p>
        </div>
      </section>
    </>
  );
};

export default Details;
