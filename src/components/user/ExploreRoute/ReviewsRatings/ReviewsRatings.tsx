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
      <div className="mt-8 grid grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6].map((card) => {
          return (
            <div className="flex gap-2" key={card}>
              <div className="">
                <div className="bg-[#4D4D4D66] h-[60px] w-[60px] rounded-full"></div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <div>
                  <p className="text-xl font-bold">Victor Adewale</p>
                  <p className="text-[#B0B0B0]">August 2024</p>
                </div>

                <p className="text-lg col-span-2">
                  Best place to enjoy nightlife in Lagos. Sound is perfect
                  security is on point and there was no problem with finding a
                  parking space. Got to see and had some premium drinks there,
                  definitely can’t wait to be back here.
                </p>

                <p className="text-[#B0B0B0]">Was this review helpful?</p>
              </div>
            </div>
          );
        })}
      </div>

      {/*  */}
      <div className="mt-16 flex justify-center gap-5">
        <Link href="/user/explore/reviews">
          <Button className="text-lg bg-transparent hover:bg-transparent text-gold-500 border-2 border-gold-500 transition duration-200 px-24 py-5 rounded-3xl">
            Show all reviews
          </Button>
        </Link>

        <Link href="">
          <Button className="text-lg bg-[#4D4D4D66] hover:bg-[#4d4d4dab] transition duration-200 px-24 py-5 rounded-3xl">
            Add a review
          </Button>
        </Link>
      </div>

      {/* similar spots */}
      <SimilarSpots />
    </section>
  );
};

export default ReviewsRatings;
