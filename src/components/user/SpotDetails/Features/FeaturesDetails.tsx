import LocationIcon from "@/assets/svg/SpotDetailsSvg/LocationIconSvg.svg";
import TelephoneIconSvg from "@/assets/svg/SpotDetailsSvg/TelephoneIconSvg.svg";
import TimeIconSvg from "@/assets/svg/SpotDetailsSvg/TimeIconSvg.svg";
import WebsiteIconSvg from "@/assets/svg/SpotDetailsSvg/WebsiteIconSvg.svg";
import Image from "next/image";

const FeaturesDetails = () => {
  return (
    <>
      {/* divider */}
      <div className="my-5 border-t-2 border-gold-500 flex-grow"></div>

      {/* details */}
      <section className="my-4 flex flex-col flex-gap gap-8">
        {/* location */}
        <div className="flex gap-2">
          <Image
            src={LocationIcon}
            alt="LocationIcon"
            height={25}
            className="self-start"
          />
          <p className="md:text-xl">
            873 Ozumba Mbadiwe Ave, Victoria Island 106104, Lagos state.
            Nigeria.
          </p>
        </div>

        {/* time */}
        <div className="flex gap-2">
          <Image
            src={TimeIconSvg}
            alt="TimeIconSvg"
            height={25}
            className="self-start"
          />
          <p className="md:text-xl">01 924 4386</p>
        </div>

        {/* time */}
        <div className="flex gap-2">
          <Image
            src={TelephoneIconSvg}
            alt="TimeIconSvg"
            height={25}
            className="self-start"
          />
          <p className="md:text-xl">
            Open time: 6:00am <br /> Close time: 6:00pm
          </p>
        </div>

        {/* time */}
        <div className="flex gap-2">
          <Image
            src={WebsiteIconSvg}
            alt="WebsiteIconSvg"
            height={25}
            className="self-start"
          />
          <p className="md:text-xl">www.clubquilox.com</p>
        </div>
      </section>
    </>
  );
};

export default FeaturesDetails;
