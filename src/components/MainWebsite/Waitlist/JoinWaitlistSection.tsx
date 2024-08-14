import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";

const JoinWaitlistSection = () => {
  return (
    <>
      <section className="mt-12 flex flex-col items-center text-center gap-3 px-4 md:w-3/5 mx-auto">
        {/* <h3 className={`text-gold-500 text-5xl ${anton.className}`}>
          JOIN THE <span className="text-white">WAITLIST!</span>
        </h3> */}
        <h3 className={`text-gold-500 text-5xl ${anton.className}`}>
          JOIN THE WAITLIST!
        </h3>
        <p className="text-lg text-[#D1D1D1]">
          Members of our waitlist will receive VIP treatment and early access to
          amazing benefits from iExplore and our global partners.
        </p>
      </section>

      <div className="mt-5 mb-12 flex flex-col md:flex-row items-center gap-4 px-4 md:w-3/5 mx-auto">
        <Input
          className="bg-[#FFFFFF1A] px-3 py-6 rounded-none text-[#C8C8C8] border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-base placeholder:text-[#4D4D4D] "
          placeholder="Email Address"
        />
        <Button className="bg-gold-500 transition duration-200 hover:bg-white text-[#322016] px-10 py-6 rounded-3xl font-bold text-base">
          Get early access
        </Button>
      </div>
    </>
  );
};

export default JoinWaitlistSection;
