"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import TopSearchBar from "@/components/vendor-components/BusinessRoute/TopSearchBar";
import { useRouter, useSearchParams } from "next/navigation";
import DrinkCard from "@/components/vendor-components/Drinks/DrinkCard";

interface Drink {
  id: number;
  name: string;
}

const DrinksSearchPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("query");
  const [searchQuery, setSearchQuery] = useState<string>(
    queryParam ? queryParam : ""
  );
  const [results, setResults] = useState<Drink[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch results whenever searchQuery changes
  // useEffect(() => {
  //   const fetchResults = async () => {
  //     if (!searchQuery.trim()) return;

  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(`/api/drinks/search?query=${searchQuery}`);
  //       const data = await response.json();
  //       setResults(data);
  //     } catch (error) {
  //       console.error("Error fetching search results:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchResults();
  // }, [searchQuery]);

  // Clear the search input 5 seconds after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery("");
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    if (newQuery.trim()) {
      router.push(`drinks-search?query=${encodeURIComponent(newQuery)}`);
    }
  };

  const singlePage = () => {
    router.push("/vendor-Home/drinks/1");
  };

  return (
    <div>
      <Header title="Drinks" className="hidden md:block" />
      <div className="px-5 mt-5">
        <TopSearchBar value={searchQuery} onChange={handleSearch} />
        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-center mt-6">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {/* Search Results */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:pr-5 mt-10">
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <DrinkCard key={card} handleClick={singlePage} />
          ))}
        </div>

        {!isLoading && results.length === 0 && (
          <p className="text-gray-500 mt-4">
            No results found for {searchQuery}
          </p>
        )}
      </div>
    </div>
  );
};

export default DrinksSearchPage;
