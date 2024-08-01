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
      <section className="p-14 flex items-center gap-20">
        <div>
          <div className="flex flex-col gap-5">
            <div className="bg-gold-500 text-brandDark mr-auto px-4 py-2 rounded-3xl flex items-center gap-2">
              {BulletPointSvg}
              <p className="font-semibold">Dashboard Analytics</p>
            </div>
            <h3 className={`text-[#F2F1E8] text-6xl ${anton.className} `}>
              UNLOCK POWERFUL INSIGHTS WITH DASHBOARD ANALYTICS
            </h3>
            <p className="text-lg text-[#D1D1D1]">
              Leverage Dashboard Analytics to monitor foot traffic and customer
              behavior. Access real-time data to make informed decisions,
              improve service, and boost profitability. Stay ahead of the
              competition with insights that drive growth.
            </p>
          </div>
        </div>

        <Image
          src={AboutVendorImg1}
          alt="AboutVendorImg1"
          className="h-[500px] w-auto"
        />
      </section>

      {/* Location Management */}
      <section className="p-14 flex items-center gap-20">
        <Image
          src={AboutVendorImg2}
          alt="AboutVendorImg2"
          className="h-[500px] w-auto"
        />

        <div>
          <div className="flex flex-col gap-5">
            <div className="bg-gold-500 text-brandDark mr-auto px-4 py-2 rounded-3xl flex items-center gap-2">
              {BulletPointSvg}

              <p className="font-semibold">Location Management</p>
            </div>
            <h3 className={`text-[#F2F1E8] text-6xl ${anton.className} `}>
              OPTIMIZE YOUR VENUE’S PRESENCE WITH EASE
            </h3>
            <p className="text-lg text-[#D1D1D1]">
              Seamlessly manage your venue’s details with iExplore’s Spot
              Management feature. Update your location, hours, and special
              events to ensure patrons always know what’s happening. Make your
              spot the go-to destination in the nightlife scene.
            </p>
          </div>
        </div>
      </section>

      {/* Drink Management */}
      <section className="p-14 flex items-center gap-20">
        <div>
          <div className="flex flex-col gap-5">
            <div className="bg-gold-500 text-brandDark mr-auto px-4 py-2 rounded-3xl flex items-center gap-2">
              {BulletPointSvg}

              <p className="font-semibold">Drink Management</p>
            </div>
            <h3 className={`text-[#F2F1E8] text-6xl ${anton.className} `}>
              SHARE YOUR LATEST DRINKS AND MENU OFFERING
            </h3>
            <p className="text-lg text-[#D1D1D1]">
              With our Drink Management tool, you can easily update and showcase
              your latest drink offerings. Highlight seasonal specials and crowd
              favorites to entice new customers and keep regulars coming back
              for more.
            </p>
          </div>
        </div>

        <Image
          src={AboutVendorImg3}
          alt="AboutVendorImg3"
          className="h-[500px] w-auto"
        />
      </section>
    </>
  );
};

export default AboutVendor;
