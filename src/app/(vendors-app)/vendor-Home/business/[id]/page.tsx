"use client";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import SpotDetailsComponent from "@/components/vendor-components/SpotDetails/SpotDetails";
import ReviewsRatings from "@/components/vendor-components/ReviewsRatings/ReviewsRatings";
import Header from "@/components/vendor-components/MiniHeader/Header";
import RatingsIcon from "@/assets/svg/UserIconsSvg/RatingsIcon.svg";
import RatingStarIcon from "@/assets/svg/VendorSvg/star.svg";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSingleSpot } from "@/app/vendorAction";
import { vendorStore } from "@/store/vendor";
interface Token {
  accessToken: string;
}
const Page = () => {
  const [spotDetails, setSpotDetails] = useState({});
  const { id } = useParams();
  const slug = Array.isArray(id) ? id[0] : id;

  console.log(`id`, id);
  const token = vendorStore((state: any) => state.token) as Token;

  useEffect(() => {
    const fetchSpotDetails = async () => {
      if (id) {
        try {
          const data = await getSingleSpot(slug, token.accessToken);
          console.log(`data`, data);
          setSpotDetails(data);
        } catch (error: any) {
          console.error(error.message);
        }
      }
    };

    fetchSpotDetails();
  }, [slug, token]);

  return (
    <>
      <Header title="Spot" className="hidden md:block" />
      <section className="px-3 md:px-7 md:py-6">
        <div className="flex items-center">
          <Link href="/vendor-Home/business">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="hidden md:flex justify-center items-center gap-3 w-full">
            <p className=" font-bold text-3xl">{spotDetails?.name}</p>
            <div className="bg-gold-500 py-1 px-3 rounded-3xl font-bold text-brandDark flex gap-1">
              <Image src={RatingStarIcon} alt="rating icons" />
              4.5
            </div>
          </div>
          <p className="md:hidden font-bold text-2xl text-center mx-auto">
            Spot Details
          </p>
        </div>

        <SpotDetailsComponent singleInfo={spotDetails} showInsight={false} />
        <ReviewsRatings />
      </section>
    </>
  );
};

export default Page;
