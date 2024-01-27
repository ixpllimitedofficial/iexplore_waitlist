import BlogPage from "@/components/App/BlogPage/BlogPage";
import HeroSection from "@/components/App/Home/HeroSection/HeroSection";
import Footer from "@/components/UI/Footer/Footer";

const page = () => {
  return (
    <section className="mt-28">
      <HeroSection />

      <BlogPage />

      <Footer />
    </section>
  );
};

export default page;
