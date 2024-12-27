"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import DrinkCard from "@/components/vendor-components/Drinks/DrinkCard";
import NotificationCard from "@/components/vendor-components/NotificationCard/NotificationSingleCard/page";
import Reviews from "@/components/vendor-components/ReviewsComponents/page";
import ReviewCard from "../../ReviewsComponents/ReviewCard";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter, useSearchParams } from "next/navigation";

const ITEMS_PER_PAGE = 6;

const fetchedDrinks = [
  {
    name: "All Notification",
    amount: 4,
  },
  {
    name: "Reviews",
    amount: 4,
  },
  {
    name: "Questions",
    amount: 4,
  },
];

// Dummy drink data
const allDrinksData = Array.from({ length: 50 }, (_, i) => i + 1); // Replace with real data
const allReviewsData = Array.from({ length: 20 }, (_, i) => i + 1); // Replace with real data
const winesData = Array.from({ length: 30 }, (_, i) => i + 1);
const spiritsData = Array.from({ length: 40 }, (_, i) => i + 1);
const cocktailsData = Array.from({ length: 10 }, (_, i) => i + 1);
const whiskeyData = Array.from({ length: 60 }, (_, i) => i + 1);
const beerData = Array.from({ length: 25 }, (_, i) => i + 1);

const TabsDemo: React.FC = () => {
  const [allDrinksPage, setAllDrinksPage] = useState(1);
  const [allReviewsPage, setAllReviewsPage] = useState(1);
  const [winesPage, setWinesPage] = useState(1);
  const [activeTab, setActiveTab] = useState(fetchedDrinks[0].name);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setAllDrinksPage(1);
    setAllReviewsPage(1);
    setWinesPage(1);
  };

  // Pagination logic for all tabs
  const paginate = (data: number[], page: number) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = (data: number[]) =>
    Math.ceil(data.length / ITEMS_PER_PAGE);

  const router = useRouter();
  const singlePage = () => {
    router.push("/vendor-Home/drinks/1");
  };
  const isNew = true; // Replace with your logic to determine if the message is new
  let messageContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rem soluta consequatur, exercitationem quis perferendis mollitia enim fuga iusto quos temporibus, tenetur quidem repellendus.";

  return (
    <div className="w-full mt-5">
      <Tabs defaultValue={fetchedDrinks[0].name} className="w-full">
        {/* Tabs List */}
        <div className="overflow-auto md:overflow-x-auto flex md:flex-nowrap">
          <TabsList className="gap-2 flex-shrink-0 my-2">
            {fetchedDrinks.map((drink) => (
              <TabsTrigger
                key={drink.name}
                value={drink.name}
                onClick={() => handleTabChange(drink.name)}
                className={`text-lg border border-gold-500 text-white rounded-full ${
                  activeTab === drink.name
                    ? "data-[state=active]:bg-gold-500 data-[state=active]:text-brandDark"
                    : ""
                }`}
              >
                {drink.name} ({drink.amount})
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* All Notification Section */}
        <TabsContent value="All Notification">
          <div className="mt-10 mb-5">
            <div className="pr-1 md:pr-5">
              {paginate(allDrinksData, allDrinksPage).map((notification) => (
                <NotificationCard key={notification} isNew={isNew} message="New user verification" messageContent={messageContent} timestamp="12.05am 12th Oct 2024"  status="Completed" />
              ))}
            </div>
            {/* Pagination for All Drinks */}
            <div className="flex justify-between items-center mt-5 mx-0 md:mx-2">
              <div className="flex space-x-1">
                {Array.from({ length: totalPages(allDrinksData) })
                  .map((_, index) => index + 1)
                  .filter((page) => {
                    // Display first 3 pages, last 2 pages, and current page with neighbors
                    return (
                      page <= 3 ||
                      page > totalPages(allDrinksData) - 2 ||
                      (page >= allDrinksPage - 1 && page <= allDrinksPage + 1)
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
                          allDrinksPage === page
                            ? "bg-gold-500 text-brandDark font-bold"
                            : "bg-[#4D4D4D] text-[#B0B0B0] font-bold"
                        }`}
                        onClick={() => setAllDrinksPage(page)}
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
                  className={` px-1 md:px-4 py-1 border rounded-md flex md:gap-1 items-center ${
                    allDrinksPage === 1
                      ? "bg-[#4D4D4D] text-[#B0B0B0]"
                      : "bg-gold-500 text-black"
                  }`}
                  disabled={allDrinksPage === 1}
                  onClick={() => setAllDrinksPage(allDrinksPage - 1)}
                >
                  <ArrowBackIosNewIcon />
                  Previous
                </button>
                <button
                  className={`px-1 md:px-4 py-1 border rounded-md flex md:gap-1 items-center ${
                    allDrinksPage === totalPages(allDrinksData)
                      ? "bg-[#4D4D4D] text-[#B0B0B0]"
                      : "bg-gold-500 text-black"
                  }`}
                  disabled={allDrinksPage === totalPages(allDrinksData)}
                  onClick={() => setAllDrinksPage(allDrinksPage + 1)}
                >
                  Next
                  <ArrowForwardIosIcon />
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        {/* Reviews section */}
        <TabsContent value="Reviews">
          <div className="mt-10 mb-5">
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
                  className={` px-1 md:px-4 py-1 border rounded-md flex md:gap-1 items-center ${
                    allReviewsPage === 1
                      ? "bg-[#4D4D4D] text-[#B0B0B0]"
                      : "bg-gold-500 text-black"
                  }`}
                  disabled={allReviewsPage === 1}
                  onClick={() => setAllReviewsPage(allReviewsPage - 1)}
                >
                  <ArrowBackIosNewIcon />
                  Previous
                </button>
                <button
                  className={`px-1 md:px-4 py-1 border rounded-md flex md:gap-1 items-center ${
                    allReviewsPage === totalPages(allReviewsData)
                      ? "bg-[#4D4D4D] text-[#B0B0B0]"
                      : "bg-gold-500 text-black"
                  }`}
                  disabled={allReviewsPage === totalPages(allReviewsData)}
                  onClick={() => setAllReviewsPage(allReviewsPage + 1)}
                >
                  Next
                  <ArrowForwardIosIcon />
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        {/* Reviews section */}
        <TabsContent value="Questions">
          <div className="mt-10 mb-5">
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
                  className={` px-1 md:px-4 py-1 border rounded-md flex md:gap-1 items-center ${
                    allReviewsPage === 1
                      ? "bg-[#4D4D4D] text-[#B0B0B0]"
                      : "bg-gold-500 text-black"
                  }`}
                  disabled={allReviewsPage === 1}
                  onClick={() => setAllReviewsPage(allReviewsPage - 1)}
                >
                  <ArrowBackIosNewIcon />
                  Previous
                </button>
                <button
                  className={`px-1 md:px-4 py-1 border rounded-md flex md:gap-1 items-center ${
                    allReviewsPage === totalPages(allReviewsData)
                      ? "bg-[#4D4D4D] text-[#B0B0B0]"
                      : "bg-gold-500 text-black"
                  }`}
                  disabled={allReviewsPage === totalPages(allReviewsData)}
                  onClick={() => setAllReviewsPage(allReviewsPage + 1)}
                >
                  Next
                  <ArrowForwardIosIcon />
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsDemo;
