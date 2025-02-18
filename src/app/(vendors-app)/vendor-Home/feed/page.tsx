"use client";
import React, { useState } from "react";
import Stories from "@/components/vendor-components/FeedRoute/Stories/Stories";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FeedCard from "@/components/vendor-components/FeedRoute/FeedCard/page";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import Header from "@/components/vendor-components/MiniHeader/Header";
import TopSearchBar from "@/components/vendor-components/BusinessRoute/TopSearchBar";
import ShareCard from "@/components/vendor-components/FeedRoute/shareMomentCard/page";
import Image from "next/image";

const Page = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const singlePage = () => {
    router.push("/vendor-Home/feed/1");
  };

  const handleSearch = (value: string) => {
    setQuery(value);

    // Mock search suggestions based on the search text
    const newSuggestions = value
      ? ["Mexxa bar", "Melissa", "Suggestion 3"].filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
      : [];
    setSuggestions(newSuggestions);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <main className="relative">
      <Header title="Feed" className="hidden md:block" />
      <div className="px-5 md:hidden">
        <div className="relative z-10">
          <TopSearchBar value={query} onChange={handleSearch} />
        </div>
        {suggestions.length > 0 && (
          <ul className="absolute left-0 -top-7 bg-brandDark text-white h-screen border border-gray-200 w-[100%]">
            <div className="mt-20">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer "
                  onClick={() => setQuery(suggestion)}
                >
                  <div onClick={singlePage} className="flex items-center gap-3">
                    <Image
                      src={StoryImg}
                      alt="profile picture"
                      width={50}
                      height={50}
                    />
                    <div>
                      <p className="text-lg font-bold"> {suggestion}</p>
                      <p className="text-sm text-[#D1D1D1]">
                        Tejuoba Mall, Yaba
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
      <section className="mt-10 md:mt-5">
        <Stories />
        <div className="px-5 mt-14">
          <div
            className={`flex gap-3 items-center ${
              suggestions.length > 0 ? "hidden" : "block"
            }`}
          >
            <p className="text-2xl md:text-3xl font-bold">Feeds</p>
            <ShareCard />
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
    </main>
  );
};

export default Page;
