import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import Reviews from "@/components/vendor-components/ReviewsComponents/page";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="reviews" className="w-[100%]">
      <TabsList className=" ">
        <TabsTrigger value="reviews" className="text-[#4D4D4D] data-[state=active]:bg-inherit !data-[state=active]:bg-inherit">Reviews</TabsTrigger>
        <TabsTrigger value="questions" className="text-[#4D4D4D] data-[state=active]:bg-inherit !data-[state=active]:bg-inherit">Questions</TabsTrigger>
      </TabsList>
      {/* divider */}
      <div className="border-t-2 border-[#e0e0e042] flex-grow mt-5 w-[100%]"></div>

      <TabsContent value="reviews">
        <Reviews />
      </TabsContent>
      <TabsContent value="questions">
        <Reviews />
      </TabsContent>
    </Tabs>
  );
}
