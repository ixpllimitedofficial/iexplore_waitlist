import { anton } from "@/app/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";

const FAQ = () => {
  return (
    <section
      className="w-[80vw] mx-auto my-20"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className="flex flex-col gap-3 text-center">
        <h3
          className={`text-gold-500 text-4xl md:text-5xl ${anton.className} `}
        >
          {/* FREQUENTLY ASKED <span className="text-gold-500">QUESTIONS?</span> */}
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <p className="text-[#D1D1D1] text-lg lg:w-3/5 mx-auto">
          We know you might have some questions about becoming a user on
          iExplore. Don’t worry — we’ve got you covered. Here are some
          frequently asked questions and answers to help you make the most of
          our platform.
        </p>
      </div>

      <Accordion type="single" collapsible className="my-5">
        <AccordionItem value="item-1" className="py-3">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            What is iExplore?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            iExplore is a nightlife platform connecting users to various
            nightlife spots with discount on drinks, unique offerings and
            experiences. iExplore is your personal connection to the best and
            happening places in your city.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            How can I find events near me?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            Simply download iExplore from Google Playstore or Appstore,
            register, turn on app’s location feature and connect to spots and
            events in your city.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            Can I share my experiences on the app?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            Absolutely. iExplore allows you share your experiences through
            reviews and rating of nightlife spot visited.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            Is the app available in my city?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            iExplore is currently available in all cities in Nigeria.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            How do I get started?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            Download the iExplore, sign up, and start exploring.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
