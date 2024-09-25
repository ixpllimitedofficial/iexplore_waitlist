import TopSearchBar from "@/components/user/ExploreRoute/TopSearchBar";
import ClubsSection from "@/components/user/ExploreRoute/ClubsSection";
import EventsSection from "@/components/user/ExploreRoute/EventsSection";

const page = () => {
  return (
    <section className="">
      <TopSearchBar />

      <section className="ml-4 lg:ml-8 mt-7 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-gold-500 text-xl md:text-2xl font-bold">
            Recommended Events
          </h1>
        </div>
        <EventsSection />
      </section>

      <ClubsSection />

      <section className="ml-4 lg:ml-8 mt-7 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-gold-500 text-xl md:text-2xl font-bold">
            Iexplore spots this week
          </h1>
        </div>
        <EventsSection />
      </section>

      <ClubsSection />
      <ClubsSection />

      <section className="ml-8 mt-7 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-gold-500 text-xl md:text-2xl font-bold">
            More events for you
          </h1>
        </div>
        <EventsSection />
      </section>
    </section>
  );
};

export default page;
