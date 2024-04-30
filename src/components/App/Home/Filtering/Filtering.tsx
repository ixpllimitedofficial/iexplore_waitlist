"use client";
import { useRouter, useSearchParams } from "next/navigation";
import FilterButton from "@/components/UI/Button/FilterButton";
import Location from "./Location/Location";
import Ratings from "./Ratings/Ratings";
import Category from "./Category/Category";

type FilterType = "category" | "location" | "ratings";

const Filtering = () => {
  const router = useRouter();

  const filterParams = useSearchParams().get("filter") as FilterType;

  const handleFilter = (filter: string) => {
    if (filterParams !== filter) {
      router.push(`/user/?filter=${filter}`, { scroll: false });
    } else {
      router.push("/user", { scroll: false });
    }
  };

  return (
    <>
      <section className="flex gap-3 md:gap-10 justify-center mx-10 mt-10">
        <FilterButton
          btnText="Category"
          handleClick={() => handleFilter("category")}
          className={` ${
            filterParams === "category" && "text-black bg-gold-500 border-none"
          }`}
        />

        <FilterButton
          btnText="Location"
          handleClick={() => handleFilter("location")}
          className={`${
            filterParams === "location" && "text-black bg-gold-500 border-none"
          }`}
        />

        <FilterButton
          btnText="Ratings"
          handleClick={() => handleFilter("ratings")}
          className={`${
            filterParams === "ratings" && "text-black bg-gold-500 border-none"
          }`}
        />
      </section>

      {/* category */}
      {filterParams === "category" && <Category />}

      {/* location */}
      {filterParams === "location" && <Location />}

      {/* ratings */}
      {filterParams === "ratings" && <Ratings />}
    </>
  );
};

export default Filtering;
