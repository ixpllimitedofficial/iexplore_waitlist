import Footer from "@/components/UI/Footer/Footer";
import ClubsPage from "@/components/user/ClubsPage/ClubsPage";
import AddLocation from "@/components/user/Home/AddLocation/AddLocation";
import FriendlySpots from "@/components/user/Home/FriendlySpots/FriendlySpots";

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
