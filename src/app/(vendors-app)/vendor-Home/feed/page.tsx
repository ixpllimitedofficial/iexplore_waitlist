"use client";
import { useState } from "react";
import Stories from "@/components/vendor-components/FeedRoute/Stories/Stories";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import FeedCard from "@/components/vendor-components/FeedRoute/FeedCard/page";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import Header from "@/components/vendor-components/MiniHeader/Header";
import TopSearchBar from "@/components/vendor-components/BusinessRoute/TopSearchBar";

const Page = () => {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const singlePage = () => {
    router.push("/vendor-Home/feed/1");
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSearch = () => {};
  return (
    <main className="relative">
      <Header title="Feed" className="hidden md:block" />
      <div className="px-5 md:hidden">
        <TopSearchBar value={query} onChange={handleSearch} />
      </div>

      <section className="mt-10 md:mt-5">
        <Stories />
        <div className="px-5 mt-14">
          <div className="flex gap-3 items-center">
            <p className="text-2xl md:text-3xl font-bold">Feeds</p>
            <p
              onClick={handleOpen}
              className="hidden md:flex gap-1 items-center bg-gold-500 py-2 px-5 text-brandDark rounded-3xl cursor-pointer"
            >
              <PlusIcon /> Share moment
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-3 md:mt-10">
            {[1, 2, 3, 4, 6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (card) => {
                return (
                  <FeedCard
                    handleClick={singlePage}
                    name="Melissa"
                    timestamp="12 mins ago"
                    src={StoryImg}
                    key={card}
                  />
                );
              }
            )}
          </div>
          <p className="mt-5 font-bold text-2xl">Viewed</p>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5  mt-3 md:mt-10">
            {[1, 2, 3, 4, 6, 6, 7, 8].map((card) => {
              return (
                <FeedCard
                  handleClick={singlePage}
                  name="Melissa"
                  timestamp="12 mins ago"
                  src={StoryImg}
                  key={card}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div className="md:hidden fixed top-[80%] right-10 border border-gold-500 p-1 rounded-full cursor-pointer">
        <div className="bg-gold-500 text-brandDark p-3 text-3xl rounded-full">
          <PlusIcon />
        </div>
      </div>
      {isOpen && (
        // Modal backdrop
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleClose}
        >
          {/* // Modal container */}
          <div
            className="bg-white rounded-lg shadow-lg p-4 w-1/2 md:w-1/3 lg:w-1/4"
            onClick={(e) => e.stopPropagation()}
          >
            // Modal content
            <h2 className="text-lg font-bold mb-2">Share Moment</h2>
            <p className="text-gray-600 mb-4">Share your moment with others.</p>
            // Single action button
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClose}
            >
              Share
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
