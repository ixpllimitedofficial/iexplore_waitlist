import GetApp from "../Home/GetApp/GetApp";
import RecommendedEventsCard from "@/components/UI/Cards/RecommendedEvents/RecommendedEventsCard";

const RecommendedEvents = () => {
  return (
    <section>
      <h1 className="text-[#E1BD8A] text-2xl md:text-3xl font-bold pl-6">
        Recommended events
      </h1>

      {[1, 2, 3].map((card) => {
        return <RecommendedEventsCard key={card} />;
      })}

      <GetApp />
    </section>
  );
};

export default RecommendedEvents;
