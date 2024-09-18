import { anton } from "@/app/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";

const VendorFAQ = () => {
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
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <p className="text-[#D1D1D1] text-lg lg:w-3/5 mx-auto">
          We know you might have some questions about becoming a vendor on
          iExplore. Don’t worry — we’ve got you covered. Here are some
          frequently asked questions and answers to help you make the most of
          our platform.
        </p>
      </div>

      <Accordion type="single" collapsible className="my-5">
        <AccordionItem value="item-1" className="py-3">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            What is iExplore for Vendors?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            iExplore helps streamline operations, attract customers and optimize
            your business. Vendors can promote their spot, events and drinks,
            allowing their SPOT be top of mind for customers.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            How do I manage my venue’s details?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            Use the vendors’ dashboard, where you can update and manage details
            on your spot.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            Can I showcase my drink offerings on the platform?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            Yes, you can showcase and offer drinks at discounted rates to
            attract users and drive sales.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            Is iExplore available in my city?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            iExplore is available in all cities in Nigeria.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            How do I get started as a vendor? How do I get started?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center text-lg text-[#D1D1D1] mt-2">
            Download and sign up on the iexplore vendor portals, complete your
            venue profile, get verified and display your drink offerings, rates
            and discounts available.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default VendorFAQ;
