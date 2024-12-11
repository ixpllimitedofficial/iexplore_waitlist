import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import SpotDetails from "@/components/vendor-components/SpotDetails/SpotDetails";
import ReviewsRatings from "@/components/vendor-components/ReviewsRatings/ReviewsRatings";
import Header from "@/components/vendor-components/MiniHeader/Header";
import RatingsIcon from "@/assets/svg/UserIconsSvg/RatingsIcon.svg";
import RatingStarIcon from "@/assets/svg/VendorSvg/star.svg";
const page = () => {
  return (
    <>
      <Header title="Business" className="hidden md:block" />
      <section className="px-7 py-6">
        <div className="flex items-center">
          <Link href="/vendor-Home/business">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex justify-center items-center gap-3 w-full">
            <p className=" font-bold text-3xl">Maxxa beach bar</p>
            <div className="bg-gold-500 py-1 px-3 rounded-3xl font-bold text-brandDark flex gap-1">
              <Image src={RatingStarIcon} alt="rating icons" />
              4.5
            </div>
          </div>
        </div>

        <SpotDetails />
        <ReviewsRatings />
      </section>
    </>
  );
};

export default page;
