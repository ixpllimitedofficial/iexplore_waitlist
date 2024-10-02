import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import Link from "next/link";
import ClubCard from "./ClubCard";

const ClubsPage = () => {
  return (
    <section className="">
      <div className="flex items-center px-5">
        <Link href="/user">
          <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
        </Link>

        <div className="flex justify-center items-center gap-3 w-full">
          <p className=" font-bold text-3xl">Clubs</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 w-[80vw] mx-auto gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card) => {
          return <ClubCard key={card} />;
        })}
      </div>
    </section>
  );
};

export default ClubsPage;
