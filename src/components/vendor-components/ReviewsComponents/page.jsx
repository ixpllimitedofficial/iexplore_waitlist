import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import ReviewSection from "@/components/vendor-components/ReviewsComponents/ReviewSection";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="club max" className="w-[100%] mt-5">
      <div className="overflow-auto md:overflow-x-auto flex md:flex-nowrap">
        <TabsList className="gap-2 flex-shrink-0 my-2">
          <TabsTrigger
            value="club max"
            className="text-lg border border-gold-500 text-white rounded-full  data-[state=active]:bg-gold-500"
          >
            Club max
          </TabsTrigger>
          <TabsTrigger
            value="Maxx bbqs & Bistro"
            className="text-lg border border-gold-500 text-white rounded-full data-[state=active]:bg-gold-500 data-[state=active]:text-brandDark"
          >
            Maxx bbqs & Bistro
          </TabsTrigger>
          <TabsTrigger
            value="Maxx Lounge"
            className="text-lg border border-gold-500 text-white rounded-full data-[state=active]:bg-gold-500 data-[state=active]:text-brandDark"
          >
            Maxx Lounge
          </TabsTrigger>
          <TabsTrigger
            value="Maxx Restaurants"
            className="text-lg border border-gold-500 text-white rounded-full data-[state=active]:bg-gold-500 data-[state=active]:text-brandDark"
          >
            Maxx Restaurants
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="club max">
        <ReviewSection />
      </TabsContent>
      <TabsContent value="Maxx bbqs & Bistro">
        <ReviewSection />
      </TabsContent>
      <TabsContent value="Maxx Lounge">
        <ReviewSection />
      </TabsContent>
      <TabsContent value="Maxx Restaurants">
        <ReviewSection />
      </TabsContent>
    </Tabs>
  );
}
