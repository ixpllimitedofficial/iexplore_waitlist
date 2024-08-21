import { anton } from "@/app/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";

import Image from "next/image";
import FAQimage from "@/assets/img/MainWebsite/FAQimage.png";

const FAQ = () => {
  return (
    <section className="w-[80vw] mx-auto my-20">
      <div className="flex flex-col gap-3 text-center">
        <h3
          className={`text-gold-500 text-4xl md:text-5xl ${anton.className} `}
        >
          {/* FREQUENTLY ASKED <span className="text-gold-500">QUESTIONS?</span> */}
          FREQUENTLY ASKED QUESTIONS?
        </h3>
        <p className="text-[#D1D1D1] text-lg lg:w-3/5 mx-auto">
          We understand you might have some questions to know better about being
          a vendor on iExplore, we have you covered. Here are some frequently
          asked questions and their answers.
        </p>
      </div>

      <Accordion type="single" collapsible className="my-5">
        <AccordionItem value="item-1" className="py-3">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            What Really is iExplore?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center">
            {/* <Image src={FAQimage} alt="FAQimage" className="hidden md:block" /> */}
            <div>
              <p className="text-lg text-[#D1D1D1] mt-2">
                We understand you might have a lot of questions to help you
                enjoy your experience out with iExplore, so we have compiled a
                list of frequently asked questions to guide you and help you
                simplify your journey with us.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            How can I find events near me?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center">
            {/* <Image src={FAQimage} alt="FAQimage" className="hidden md:block" /> */}
            <div>
              <p className="text-lg text-[#D1D1D1] mt-2">
                We understand you might have a lot of questions to help you
                enjoy your experience out with iExplore, so we have compiled a
                list of frequently asked questions to guide you and help you
                simplify your journey with us.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            Can I share my experiences on the app?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center">
            {/* <Image src={FAQimage} alt="FAQimage" className="hidden md:block" /> */}
            <div>
              <p className="text-lg text-[#D1D1D1] mt-2">
                We understand you might have a lot of questions to help you
                enjoy your experience out with iExplore, so we have compiled a
                list of frequently asked questions to guide you and help you
                simplify your journey with us.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            Is the app available in my city?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center">
            {/* <Image src={FAQimage} alt="FAQimage" className="hidden md:block" /> */}
            <div>
              <p className="text-lg text-[#D1D1D1] mt-2">
                We understand you might have a lot of questions to help you
                enjoy your experience out with iExplore, so we have compiled a
                list of frequently asked questions to guide you and help you
                simplify your journey with us.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="py-5">
          <AccordionTrigger className="text-xl md:text-2xl text-start">
            How do I get started?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col md:flex-row gap-5 items-center">
            {/* <Image src={FAQimage} alt="FAQimage" className="hidden md:block" /> */}
            <div>
              <p className="text-lg text-[#D1D1D1] mt-2">
                We understand you might have a lot of questions to help you
                enjoy your experience out with iExplore, so we have compiled a
                list of frequently asked questions to guide you and help you
                simplify your journey with us.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
