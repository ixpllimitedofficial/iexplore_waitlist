// import HeroSection from "@/components/Home/HeroSection/HeroSection";
// import Filtering from "@/components/Home/Filtering/Filtering";
// import Clubs from "@/components/Home/Clubs/Clubs";
// import RecommendedSection from "@/components/Home/RecommendedSection/RecommendedSection";
// import GetApp from "@/components/Home/GetApp/GetApp";
// import FriendlySpots from "@/components/Home/FriendlySpots/FriendlySpots";
// import AddLocation from "@/components/Home/AddLocation/AddLocation";
// import Footer from "@/components/UI/Footer/Footer";

// const page = () => {
//   return (
//     <main className="mt-28">
//       <HeroSection />
//       <Filtering />
//       <Clubs />
//       <RecommendedSection />
//       <GetApp />
//       <Clubs />
//       <FriendlySpots />
//       <AddLocation />
//       <Footer />
//     </main>
//   );
// };

// export default page;


import AboutApp from "@/components/LandingPage/AboutApp";
import GetApp from "@/components/LandingPage/GetApp";
import HeroSection from "@/components/LandingPage/HeroSection";
import ContactSection from "@/components/LandingPage/ContactSection"
import Footer from "@/components/UI/Footer/Footer";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutApp />
      <GetApp />
      <ContactSection />
      <Footer />
    </>
  );
};

export default page;
