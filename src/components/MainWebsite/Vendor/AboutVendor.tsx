import Image from "next/image";
import { anton } from "@/app/fonts";
import AboutVendorImg1 from "@/assets/img/MainWebsite/AboutVendorImg1.png";
import AboutVendorImg2 from "@/assets/img/MainWebsite/AboutVendorImg2.png";
import AboutVendorImg3 from "@/assets/img/MainWebsite/AboutVendorImg3.png";

const BulletPointSvg = (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="#322016" />
  </svg>
);

const AboutVendor = () => {
  return (
    <>
      {/* Dashboard Analytics*/}
      <section className="px-5 md:px-7 mt-10 md:py-10 lg:p-14 flex flex-col-reverse md:flex-row items-center gap-7 lg:gap-20">
        <div
          className="flex flex-col gap-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="bg-gold-500 text-brandDark mr-auto px-4 py-2 rounded-3xl flex items-center gap-2">
            {BulletPointSvg}
            <p className="font-semibold">Dashboard Analytics</p>
          </div>
          <h3
            className={`text-[#F2F1E8] text-4xl lg:text-5xl ${anton.className} `}
          >
            UNLOCK POWERFUL INSIGHTS WITH DASHBOARD ANALYTICS
          </h3>
          <p className=" md:text-lg text-[#D1D1D1]">
            Track foot traffic and customer behavior in real-time. Make smarter
            decisions and drive profits with data that drives growth and keeps
            you ahead of the competition.
          </p>
        </div>

        <Image
          src={AboutVendorImg1}
          alt="AboutVendorImg1"
          className="w-full h-auto md:h-[300px] lg:h-[500px] md:w-auto"
        />
      </section>

      {/* Location Management */}
      <section className="px-5 md:px-7 my-16 md:my-0 md:py-10 lg:p-14 flex flex-col md:flex-row items-center gap-7 lg:gap-20">
        <Image
          src={AboutVendorImg2}
          alt="AboutVendorImg2"
          className="w-full h-auto md:h-[300px] lg:h-[500px] md:w-auto"
        />

        <div
          className="flex flex-col gap-3 my-4 md:my-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="bg-gold-500 text-brandDark mr-auto px-4 py-2 rounded-3xl flex items-center gap-2">
            {BulletPointSvg}

            <p className="font-semibold">Location Management</p>
          </div>
          <h3
            className={`text-[#F2F1E8] text-4xl lg:text-5xl ${anton.className} `}
          >
            EASILY OPTIMIZE VENUE PRESENCE
          </h3>
          <p className="md:text-lg text-[#D1D1D1]">
            Make your spot the ultimate go-to destination with Spot management:
            Easily update your location, hours of service and special events to
            stay top-of-mind in the nightlife scene.
          </p>
        </div>
      </section>

      {/* Drink Management */}
      <section className="px-5 md:px-7 md:py-10 lg:p-14 flex flex-col-reverse md:flex-row items-center gap-7 lg:gap-20">
        <div
          className="flex flex-col gap-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="bg-gold-500 text-brandDark mr-auto px-4 py-2 rounded-3xl flex items-center gap-2">
            {BulletPointSvg}

            <p className="font-semibold">Drink Management</p>
          </div>
          <h3
            className={`text-[#F2F1E8] text-4xl lg:text-5xl ${anton.className} `}
          >
            {/* SHARE YOUR{" "}
              <span className="text-gold-500"> LATEST DRINKS AND</span> MENU
              OFFERING */}
            UPDATE DRINKS AND MENU OFFERING
          </h3>
          <p className="md:text-lg text-[#D1D1D1]">
            With our Drink Management tool, you can update and showcase latest
            drink offering, highlight seasonal specials and crowd favorites to
            entice new customers and keep the regulars returning for more.
          </p>
        </div>

        <Image
          src={AboutVendorImg3}
          alt="AboutVendorImg3"
          className="w-full h-auto md:h-[300px] lg:h-[500px] md:w-auto"
        />
      </section>
    </>
  );
};

export default AboutVendor;
