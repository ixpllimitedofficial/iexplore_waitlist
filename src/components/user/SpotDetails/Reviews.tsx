import Link from "next/link";
import React from "react";
import SingleReview from "./SingleReview";

const Reviews = () => {
  return (
    <section className="">
      <div className="md:px-10 pb-3 flex justify-between border-b-2 border-[#D0D0D0]">
        <Link href="#">
          <p className="md:text-xl text-gold-500 font-bold">Reviews</p>
        </Link>
        <Link href="#">
          <p className="md:text-xl text-gold-500">
            Questions & answers
          </p>
        </Link>
      </div>

      <SingleReview />
      <SingleReview />

      <p className="text-gold-500 text-lg font-medium underline text-center mt-5">
        Read all reviews
      </p>
    </section>
  );
};

export default Reviews;
