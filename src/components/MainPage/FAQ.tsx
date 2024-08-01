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
    <section className="w-[85vw] mx-auto my-14">
      <div className="flex flex-col gap-5 text-center">
        <h3 className={`text-gold-500 text-6xl ${anton.className} `}>
          FREQUENTLY ASKED QUESTIONS?
        </h3>
        <p className="text-lg text-[#D1D1D1] w-3/4 mx-auto">
          We understand you might have some questions to know better about being
          a vendor on iExplore, we have you covered. Here are some frequently
          asked questions and their answers
        </p>
      </div>

      <Accordion type="single" collapsible className="my-5">
        <AccordionItem value="item-1" className="py-5">
          <AccordionTrigger className="text-2xl">
            What Really is iExplore?
          </AccordionTrigger>
          <AccordionContent className="flex gap-5 items-center">
            <Image src={FAQimage} alt="FAQimage" />
            <div>
              {/* <p className="text-2xl">What Really is iExplore?</p> */}
              <p className="text-lg text-[#D1D1D1] mt-2 w-3/4">
                We understand you might have a lot of questions to help you
                enjoy your experience out with iExplore, so we have compiled a
                list of frequently asked questions to guide you and help you
                simplify your journey with us.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="py-5">
          <AccordionTrigger className="text-2xl">
            How can I find events near me?
          </AccordionTrigger>
          <AccordionContent className="flex gap-5 items-center">
            <Image src={FAQimage} alt="FAQimage" />
            <div>
              {/* <p className="text-2xl">What Really is iExplore?</p> */}
              <p className="text-lg text-[#D1D1D1] mt-2 w-3/4">
                We understand you might have a lot of questions to help you
                enjoy your experience out with iExplore, so we have compiled a
                list of frequently asked questions to guide you and help you
                simplify your journey with us.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="py-5">
          <AccordionTrigger className="text-2xl">
          Can I share my experiences on the app?
          </AccordionTrigger>
          <AccordionContent className="flex gap-5 items-center">
            <Image src={FAQimage} alt="FAQimage" />
            <div>
              {/* <p className="text-2xl">What Really is iExplore?</p> */}
              <p className="text-lg text-[#D1D1D1] mt-2 w-3/4">
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
