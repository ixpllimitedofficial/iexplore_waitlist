import Image from "next/image";
import RatingsIcon from "@/assets/svg/UserIconsSvg/RatingsIcon.svg";
import Link from "next/link";
import { Button } from "@/components/UI/button";
import SimilarSpots from "./SimilarSpots";
import DrinkCard from "@/components/vendor-components/ReviewsComponents/ReviewCard";

const ReviewsRatings = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mt-7 mb-1 bg-[#4D4D4D66] px-4 py-3">
        <p className="text-xl font-bold">Reviews & Ratings</p>

        <div className="flex items-center gap-1">
          <Image src={RatingsIcon} alt="RatingsIcon" height={20} />
          <p className="font-bold text-gold-500 text-lg">4.5</p>
          <p className="font-medium text-gold-500">(22 Reviews)</p>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-5 ">
        {[1, 2, 3, 4, 5, 6].map((card) => {
          return <DrinkCard key={card} />;
        })}
      </div>

      {/*  */}
      <div className="mt-16 flex justify-center gap-5">
        <Link href="/vendor-Home/explore/reviews">
          <Button className="text-lg bg-transparent hover:bg-transparent text-gold-500 border-2 border-gold-500 transition duration-200 px-24 py-5 rounded-3xl">
            Show all reviews
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ReviewsRatings;
