import { anton } from "@/app/fonts";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full h-[600px] lg:h-screen overflow-hidden">
        <h1
          className={`text-[#F2F1E8] text-[48px] leading-none md:text-6xl ${anton.className} absolute z-10 left-3 md:left-10 bottom-8  md:w-3/5 lg:w-[42%]`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          DISCOVER, CONNECT, AND ENJOY THE BEST NIGHT OUT IN YOUR CITY! 
        </h1>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="heroVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
};

export default HeroSection;
