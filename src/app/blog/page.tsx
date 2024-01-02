import BlogPage from "@/components/BlogPage/BlogPage";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import Footer from "@/components/UI/Footer/Footer";
import React from "react";

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
