import Link from "next/link";
import { Button } from "@/components/UI/button";
import { PlusIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import ClubCard from "./ClubCard";

const ClubsSection = () => {
  return (
    <section className="ml-4 lg:ml-8 mt-7 flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold">My Spots</h1>
        <Link href="/vendor-Home/business">
          <button className=" md:hidden flex gap-1 justify-center items-center text-sm border border-gold-500 text-gold-500 hover:text-black hover:bg-gold-500 md:bg-gold-500 md:text-brandDark md:text-lg p-1 md:p-3 rounded-full  font-bold">
            See all <ArrowRightIcon />
          </button>
        </Link>
        <Link href="/vendor-Home/dashboard/set-up" className="hidden md:block">
          <button className="flex gap-1 justify-center items-center text-sm border border-gold-500 text-gold-500 hover:text-black hover:bg-gold-500 md:bg-gold-500 md:text-brandDark md:text-lg p-1 md:p-3 rounded-full  font-bold">
            Add new spot <PlusIcon />
          </button>
        </Link>
      </div>
      <div className="mt-4 grid grid-col-1 lg:grid-cols-3 gap-5 md:pr-5">
        {[1, 2, 3].map((card) => {
          return <ClubCard key={card} />;
        })}
      </div>

      <Link
        href="/vendor-Home/business"
        className="self-center my-10 hidden md:block"
      >
        <Button
          className="bg-[#0E0E0E] transition duration-200 text-gold-500 border-2 border-gold-500 px-7 py-5 rounded-2xl font-bold text-base"
          type="submit"
        >
          View all spots
        </Button>
      </Link>
      <Link href="/vendor-Home/dashboard/set-up" className="mt-6 md:hidden">
        <button className="flex gap-1 justify-center items-center text-lg bg-gold-500 text-brandDark hover:bg-white p-2 w-full  rounded-full  font-light">
          Add new spot <PlusIcon />
        </button>
      </Link>
    </section>
  );
};

export default ClubsSection;
