import LocationIcon from "@/assets/svg/SpotDetailsSvg/LocationIconSvg.svg";
import TelephoneIconSvg from "@/assets/svg/SpotDetailsSvg/TelephoneIconSvg.svg";
import TimeIconSvg from "@/assets/svg/SpotDetailsSvg/TimeIconSvg.svg";
import WebsiteIconSvg from "@/assets/svg/SpotDetailsSvg/WebsiteIconSvg.svg";
import Image from "next/image";

const FeaturesDetails = () => {
  return (
    <>
      {/* divider */}
      <div className="my-5 border-t-2 border-[#F9D9AD] flex-grow"></div>

      {/* details */}
      <section className="flex flex-col flex-gap gap-5">
        {/* location */}
        <div className="flex gap-2">
          <Image src={LocationIcon} alt="LocationIcon" height={25} className="self-start" />
          <p className="text-lg">
            873 Ozumba Mbadiwe Ave, Victoria Island 106104, Lagos state.
            Nigeria.
          </p>
        </div>

        {/* time */}
        <div className="flex gap-2">
          <Image src={TimeIconSvg} alt="TimeIconSvg" height={25} className="self-start" />
          <p className="text-lg">01 924 4386</p>
        </div>

        {/* time */}
        <div className="flex gap-2">
          <Image src={TelephoneIconSvg} alt="TimeIconSvg" height={25} className="self-start" />
          <p className="text-lg">
            Open time: 6:00am <br /> Close time: 6:00pm
          </p>
        </div>

        {/* time */}
        <div className="flex gap-2">
          <Image src={WebsiteIconSvg} alt="WebsiteIconSvg" height={25} className="self-start" />
          <p className="text-lg">www.clubquilox.com</p>
        </div>
      </section>
    </>
  );
};

export default FeaturesDetails;
