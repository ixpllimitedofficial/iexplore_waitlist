"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import SpotDetails from "@/components/vendor-components/SpotDetails/SpotDetails";
import ReviewsRatings from "@/components/vendor-components/ReviewsRatings/ReviewsRatings";
import Header from "@/components/vendor-components/MiniHeader/Header";
import RatingsIcon from "@/assets/svg/UserIconsSvg/RatingsIcon.svg";
import RatingStarIcon from "@/assets/svg/VendorSvg/star.svg";
import DrinksIcon from "@/assets/svg/UserIconsSvg/DrinksIcon.svg";
import DrinkCard from "@/components/vendor-components/Drinks/DrinkCard";
import { useRouter } from "next/navigation";
import ReviewCard from "@/components/vendor-components/ReviewsComponents/ReviewCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import DrinkImage from "@/assets/img/UserWebappImages/DrinkImage.png";
import { StaticImageData } from "next/image";
// Define the type for the drink object
type Drink = {
  id: string;
  image: string | StaticImageData;
  name: string;
  price: string;
  spot: string;
  slug: string;
};

// Example list of drinks
const drinksList: Drink[] = [
  {
    id: "1",
    image: DrinkImage,
    name: "Mojito",
    price: "1500",
    spot: "Maxxa Beach Bar",
    slug: "mojito",
  },
  {
    id: "2",
    image: DrinkImage,
    name: "Martini",
    price: "2000",
    spot: "Maxxa Beach Bar",
    slug: "martini",
  },
  {
    id: "3",
    image: DrinkImage,
    name: "Pina Colada",
    price: "1800",
    spot: "Maxxa Beach Bar",
    slug: "pina-colada",
  },
];
const ITEMS_PER_PAGE = 6;
const allReviewsData = Array.from({ length: 20 }, (_, i) => i + 1); // Replace with real data
const Page = () => {
  const [allReviewsPage, setAllReviewsPage] = useState(1);
  const router = useRouter();
  const singlePage = () => {
    router.push("/vendor-Home/drinks/1");
  };

  // Pagination logic for all tabs
  const paginate = (data: number[], page: number) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = (data: number[]) =>
    Math.ceil(data.length / ITEMS_PER_PAGE);
  return (
    <>
      <Header title="Profile" className="hidden md:block" />
      <section className="px-7 py-6">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex justify-center items-center gap-3 w-full">
            <p className="text-2xl font-bold md:text-3xl">Business insight</p>
          </div>
        </div>
        <div className="mt-10 md:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#4D4D4D4D] p-3 rounded-lg flex justify-around items-center gap-3">
            <Image
              src={DrinksIcon}
              alt="drinks icon"
              width={45}
              height={45}
              className="p-2 bg-[#4D4D4D] rounded-full"
            />
            <div>
              <p className="text-2xl font-bold pb-2">Total Visitors</p>
              <p className="text-3xl font-bold text-white">300</p>
            </div>
          </div>
          <div className="bg-[#4D4D4D4D] p-3 rounded-lg flex justify-around items-center gap-3">
            <Image
              src={RatingStarIcon}
              alt="drinks icon"
              width={45}
              height={45}
              className="p-2 bg-[#4D4D4D] rounded-full text-white"
            />
            <div>
              <p className="text-2xl font-bold pb-2">Business Rating</p>
              <p className="text-3xl font-bold">4.5</p>
            </div>
          </div>
        </div>
        <p className="text-2xl font-bold my-5">Most popular items</p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-1 md:pr-5">
          {drinksList.map((drink) => (
            <DrinkCard key={drink.id} handleClick={singlePage} drinks={drink} />
          ))}
        </div>

        {/* reviews */}
        <div className="mt-10 mb-5">
          <p className="text-2xl font-bold">Reviews on business</p>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-5">
            {paginate(allReviewsData, allReviewsPage).map((review) => (
              <ReviewCard key={review} />
            ))}
          </div>
          {/* Pagination for All Drinks */}
          <div className="flex justify-between items-center mt-5 mx-0 md:mx-2">
            <div className="flex space-x-1">
              {Array.from({ length: totalPages(allReviewsData) })
                .map((_, index) => index + 1)
                .filter((page) => {
                  // Display first 3 pages, last 2 pages, and current page with neighbors
                  return (
                    page <= 3 ||
                    page > totalPages(allReviewsData) - 2 ||
                    (page >= allReviewsPage - 1 && page <= allReviewsPage + 1)
                  );
                })
                .reduce<(number | string)[]>((acc, page, index, array) => {
                  // Add ellipses where necessary
                  if (index > 0 && page > array[index - 1] + 1) {
                    acc.push("...");
                  }
                  acc.push(page);
                  return acc;
                }, [])
                .map((page, index) =>
                  typeof page === "number" ? (
                    <button
                      key={index}
                      className={`p-1 md:px-3 md:py-1 border rounded-full ${
                        allReviewsPage === page
                          ? "bg-gold-500 text-brandDark font-bold"
                          : "bg-[#4D4D4D] text-[#B0B0B0] font-bold"
                      }`}
                      onClick={() => setAllReviewsPage(page)}
                    >
                      {page}
                    </button>
                  ) : (
                    <span key={index} className="md:px-3 py-1">
                      {page}
                    </span>
                  )
                )}
            </div>
            <div className="flex space-x-2">
              <button
                className={` px-1 md:px-2 py-1 border rounded-md flex md:gap-1 items-center ${
                  allReviewsPage === 1
                    ? "bg-[#4D4D4D] text-[#B0B0B0]"
                    : "bg-gold-500 text-black"
                }`}
                disabled={allReviewsPage === 1}
                onClick={() => setAllReviewsPage(allReviewsPage - 1)}
              >
                <NavigateBeforeIcon />
                Previous
              </button>
              <button
                className={`px-1 md:px-2 py-1 border rounded-md flex md:gap-1 items-center ${
                  allReviewsPage === totalPages(allReviewsData)
                    ? "bg-[#4D4D4D] text-[#B0B0B0]"
                    : "bg-gold-500 text-black"
                }`}
                disabled={allReviewsPage === totalPages(allReviewsData)}
                onClick={() => setAllReviewsPage(allReviewsPage + 1)}
              >
                Next
                <NavigateNextIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
