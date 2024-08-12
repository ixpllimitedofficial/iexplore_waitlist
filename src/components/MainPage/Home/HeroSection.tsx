import { anton } from "@/app/fonts";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full h-[650px] overflow-hidden">
        <h1
          className={`text-[#F2F1E8] text-[48px] leading-none md:text-6xl ${anton.className} absolute z-10 left-3 md:left-10 bottom-8 md:bottom-5 md:w-[42%]`}
        >
          DISCOVER, <span className="text-gold-500">CONNECT</span>, AND ENJOY{" "}
          <span className="text-gold-500">THE BEST NIGHT OUT</span> IN YOUR CITY! 
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
