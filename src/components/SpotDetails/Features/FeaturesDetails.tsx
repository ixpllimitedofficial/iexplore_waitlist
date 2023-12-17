import LocationIcon from "@/assets/svg/SpotDetailsSvg/LocationIconSvg.svg";
import TelephoneIconSvg from "@/assets/svg/SpotDetailsSvg/TelephoneIconSvg.svg";
import TimeIconSvg from "@/assets/svg/SpotDetailsSvg/TimeIconSvg.svg";
import WebsiteIconSvg from "@/assets/svg/SpotDetailsSvg/WebsiteIconSvg.svg";
import Image from "next/image";

const Details = () => {
  return (
    <>
      {/* divider */}
      <div className="my-12 border-t-2 border-[#F9D9AD] flex-grow"></div>

      {/* details */}
      <section className="flex flex-col flex-gap gap-10">
        {/* location */}
        <div className="flex items-center gap-5">
          <Image src={LocationIcon} alt="LocationIcon" height={40} />
          <p className="text-2xl">
            873 Ozumba Mbadiwe Ave, Victoria Island <br /> 106104, Lagos state.
            Nigeria.
          </p>
        </div>

        {/* time */}
        <div className="flex items-center gap-5">
          <Image src={TimeIconSvg} alt="TimeIconSvg" height={40} />
          <p className="text-2xl">01 924 4386</p>
        </div>

        {/* time */}
        <div className="flex items-center gap-5">
          <Image src={TelephoneIconSvg} alt="TimeIconSvg" height={40} />
          <p className="text-2xl">
            Open time: 6:00am <br /> Close time: 6:00pm
          </p>
        </div>

        {/* time */}
        <div className="flex items-center gap-5">
          <Image src={WebsiteIconSvg} alt="WebsiteIconSvg" height={40} />
          <p className="text-2xl">www.clubquilox.com</p>
        </div>
      </section>
    </>
  );
};

export default Details;
