import Image from "next/image";

import AboutUsPhone1 from "@/assets/img/MainWebsite/AboutUs/AboutUsPhone1.png";
import AboutUsPhone2 from "@/assets/img/MainWebsite/AboutUs/AboutUsPhone2.png";
import AboutUsPhone3 from "@/assets/img/MainWebsite/AboutUs/AboutUsPhone3.png";
import AboutUsPhone4 from "@/assets/img/MainWebsite/AboutUs/AboutUsPhone4.png";

const Features = () => {
  return (
    <section className="pb-14 pt-20 px-5 grid grid-cols-2 gap-10">
      <div className="col-span-1 flex items-center gap-5 pr-10">
        <Image src={AboutUsPhone1} alt="AboutUsPhone1" />
        <p className="text-xl">
          Enjoy the best of Premium and popular drinks available at your
          favorite spots.
        </p>
      </div>

      <div className="col-span-1 flex items-center gap-5 pr-10">
        <Image src={AboutUsPhone2} alt="AboutUsPhone2" />
        <p className="text-xl">
          Get information on your favorite spots. See everything they have to
          offer and more.
        </p>
      </div>

      <div className="col-span-1 flex items-center gap-5 pr-10">
        <Image src={AboutUsPhone3} alt="AboutUsPhone3" />
        <p className="text-xl">
          Everything you need to enjoy going out at your finger tips. Get info
          on Clubs, Bars, Lounges and every exciting place out.
        </p>
      </div>

      <div className="col-span-1 flex items-center gap-5 pr-10">
        <Image src={AboutUsPhone4} alt="AboutUsPhone4" />
        <p className="text-xl">
          Read latest blog posts on fun locations to enjoy your weekends easily
          on iExplore.
        </p>
      </div>
    </section>
  );
};

export default Features;
