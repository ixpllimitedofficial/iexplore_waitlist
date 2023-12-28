import ClubsPage from "@/components/ClubsPage/ClubsPage";
import AddLocation from "@/components/Home/AddLocation/AddLocation";
import FriendlySpots from "@/components/Home/FriendlySpots/FriendlySpots";
import Footer from "@/components/UI/Footer/Footer";

const page = () => {
  return (
    <section className="mt-28">
      <ClubsPage />

      <FriendlySpots />

      <AddLocation />

      <Footer />
    </section>
  );
};

export default page;
