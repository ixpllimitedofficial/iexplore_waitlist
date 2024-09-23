import GetApp from "../Home/GetApp/GetApp";
import RecommendedEventsCard from "@/components/UI/Cards/RecommendedEvents/RecommendedEventsCard";

const RecommendedEvents = () => {
  return (
    <section>
      <h1 className="text-gold-500 text-2xl md:text-3xl font-bold pl-6">
        Recommended events
      </h1>

      {[1, 2, 3].map((card) => {
        return <RecommendedEventsCard key={card} />;
      })}
    </section>
  );
};

export default RecommendedEvents;
