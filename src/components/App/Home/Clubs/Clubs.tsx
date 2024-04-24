import AppButton from "@/components/UI/Button/AppButton";
import ClubCard from "@/components/UI/Cards/ClubCard";
import ArrowButtonRight from "@/assets/svg/ArrowButtonRight.svg";
import Link from "next/link";

const Clubs = () => {
  return (
    <section className="mx-5 md:mx-14 mt-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[#E1BD8A] text-xl md:text-2xl font-bold">
          Clubs
        </h1>
        <Link href="/user/clubs">
          <AppButton
            btnText="See all"
            className="border-2 border-[#887254] text-sm md:text-lg"
            rightIcon={ArrowButtonRight}
          />
        </Link>
      </div>

      <div className="flex gap-5 overflow-x-scroll no-scrollbar whitespace-nowrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card) => {
          return <ClubCard key={card} />;
        })}
      </div>
    </section>
  );
};

export default Clubs;
