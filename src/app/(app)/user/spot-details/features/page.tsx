import Image from "next/image";
import ShareIcon from "@/assets/svg/SpotDetailsSvg/ShareIconSvg.svg";
import BookmarkIcon from "@/assets/svg/SpotDetailsSvg/BookmarkIconSvg.svg";
import FriendlySpots from "@/components/App/Home/FriendlySpots/FriendlySpots";
import AllFeatures from "@/components/App/SpotDetails/Features/AllFeatures";
import FeaturesDetails from "@/components/App/SpotDetails/Features/FeaturesDetails";
import Offers from "@/components/App/SpotDetails/Features/Offers";

const page = () => {
  return (
    <>
      <section className="px-5 md:px-12 mt-32">
        {/* title and icons */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-[#E1BD8A] text-3xl font-bold">Club Quilox</h1>

          <div className="flex gap-2">
            <Image src={ShareIcon} alt="ShareIcon" height={45} />
            <Image src={BookmarkIcon} alt="BookmarkIcon" height={45} />
          </div>
        </div>

        {/* about */}
        <div className="mt-5">
          <h1 className="text-2xl font-bold mb-2">About</h1>

          <p className="text-xl leading-relaxed">
            Located at the heart of Lagos is the King of entertainment and
            nightlife in the city. Experience the thrill of Lagos nightlife
            here. <br />
            Club Quilox is one of the most popular bars/clubs in Lagos, Nigeria.
            Few people also know that it has a restaurant too. While many assume
            Club Quilox is in Lekki, it is more accurate to place its location
            in Victoria Island.
          </p>

          {/* details */}
          <FeaturesDetails />

          {/* all features */}
          <AllFeatures />

          {/* offers */}
          <Offers />
        </div>
      </section>

      {/* friendly spots */}
      <FriendlySpots />
    </>
  );
};

export default page;
