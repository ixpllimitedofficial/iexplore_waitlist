import Link from "next/link";
import React from "react";
import SingleReview from "./SingleReview";

const Reviews = () => {
  return (
    <section className="">
      <div className="md:px-10 pb-3 flex justify-between border-b-2 border-[#D0D0D0]">
        <Link href="#">
          <p className="text-lg md:text-xl text-[#E1BD8A]">Reviews</p>
        </Link>
        <Link href="#">
          <p className="text-lg md:text-xl text-[#E1BD8A]">Questions & answers</p>
        </Link>
      </div>

      <SingleReview />
      <SingleReview />

      <p className="text-[#E1BD8A] text-lg font-medium underline text-center mt-5">Read all reviews</p>
    </section>
  );
};

export default Reviews;
