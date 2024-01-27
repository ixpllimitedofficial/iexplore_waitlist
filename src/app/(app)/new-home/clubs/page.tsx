import ClubsPage from "@/components/App/ClubsPage/ClubsPage";
import AddLocation from "@/components/App/Home/AddLocation/AddLocation";
import FriendlySpots from "@/components/App/Home/FriendlySpots/FriendlySpots";
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
