import DrinkCard from "./DrinkCard";
import Link from "next/link";
import { PlusIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/UI/button";
import { useRouter, useSearchParams } from "next/navigation";

const DrinksSection = () => {
  const router = useRouter();
  const singlePage = () => {
    router.push("/vendor-Home/drinks/1");
  };
  return (
    <section className="md:ml-8 flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold">Drinks</h1>
        <Link href="/vendor-Home/drinks">
          <button className=" md:hidden flex gap-1 justify-center items-center text-sm border border-gold-500 text-gold-500 hover:text-black hover:bg-gold-500 md:bg-gold-500 md:text-brandDark md:text-lg p-1 md:p-3 rounded-full  font-bold">
            See all <ArrowRightIcon />
          </button>
        </Link>
        <Link href="/vendor-Home/drinks/add" className="hidden md:block">
          <button className="flex gap-1 justify-center items-center text-sm border border-gold-500 text-gold-500 hover:text-black hover:bg-gold-500 md:bg-gold-500 md:text-brandDark md:text-lg p-1 md:p-3 rounded-full  font-bold">
            Add new drinks <PlusIcon />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:pr-5 ">
        {[1, 2, 3].map((card) => {
          return <DrinkCard key={card} handleClick={singlePage} />;
        })}
      </div>
      <Link
        href="/vendor-Home/drinks"
        className="self-center my-10 hidden md:block"
      >
        <Button
          className="bg-[#0E0E0E] transition duration-200 text-gold-500 border-2 border-gold-500 px-7 py-5 rounded-2xl font-bold text-base"
          type="submit"
        >
          View all drinks
        </Button>
      </Link>
      <Link href="/vendor-Home/drinks/add" className="mt-6 mb-10 md:hidden">
        <button className="flex gap-1 justify-center items-center text-lg bg-gold-500 text-brandDark hover:bg-white p-2 w-full  rounded-full  font-light">
          Add new drink <PlusIcon />
        </button>
      </Link>
    </section>
  );
};

export default DrinksSection;
