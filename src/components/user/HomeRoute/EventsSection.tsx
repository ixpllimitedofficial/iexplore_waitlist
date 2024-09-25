import Link from "next/link";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import EventsSectionCard from "./EventsSectionCard";

const EventsSection = () => {
  return (
    <section className="flex flex-col">
      <div className="flex gap-5 overflow-x-scroll no-scrollbar whitespace-nowrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card) => {
          return <EventsSectionCard key={card} />;
        })}
      </div>

      <Link href="/user" className="self-end mr-5 my-3">
        <Button
          className="bg-[#0E0E0E] transition duration-200 text-gold-500 border-2 border-gold-500 px-7 py-5 rounded-3xl font-bold text-base"
          type="submit"
        >
          See all
          <ArrowRightIcon />
        </Button>
      </Link>
    </section>
  );
};

export default EventsSection;
