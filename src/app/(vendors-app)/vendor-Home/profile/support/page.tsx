"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import SpotDetails from "@/components/vendor-components/SpotDetails/SpotDetails";
import ReviewsRatings from "@/components/vendor-components/ReviewsRatings/ReviewsRatings";
import Header from "@/components/vendor-components/MiniHeader/Header";
import RatingsIcon from "@/assets/svg/UserIconsSvg/RatingsIcon.svg";
import RatingStarIcon from "@/assets/svg/VendorSvg/star.svg";
import TopSearchBar from "@/components/vendor-components/BusinessRoute/TopSearchBar";
import { useRouter } from "next/navigation";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import { MessagesSquareIcon, Mails } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";

const Page = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      router.push(
        `drinks/drinks-search?query=${encodeURIComponent(searchQuery)}`
      );
    }
  };
  return (
    <>
      <Header title="Profile" className="hidden md:block" />
      <section className="px-7 md:py-6 h-[100vh] md:h-fit">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <p className="hidden md:block font-bold text-3xl">Support</p>
            <p className="md:hidden font-bold text-2xl">Contact support</p>
          </div>
        </div>
        <p className="hidden md:block text-2xl text-center my-3 mt-10 font-bold">
          How can we help you?
        </p>
        <p className="md:hidden text-xl text-center my-3 mt-10 font-bold">
          Easily reach out to our support on call
        </p>
        <div className="hidden md:block">
          <TopSearchBar value={query} onChange={handleSearch} />
        </div>
        <div className="md:hidden flex flex-col gap-5 mt-8">
          <div className="flex-1 bg-[#4D4D4D4D] p-3 rounded-lg">
            <div className="flex gap-3 items-center">
              <div className="bg-[#4D4D4D4D] bg-opacity-30 p-2 rounded-full">
                <Mails />
              </div>
              <div>
                <p className="text-2xl font-bold">Call with phone</p>
                <p className="text-[#D1D1D1]">+234 1234 1234 9087</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#4D4D4D4D] p-3 rounded-lg">
            <div className="flex gap-3 items-center">
              <div className="bg-[#4D4D4D4D] bg-opacity-30 p-2 rounded-full">
                <HeadsetMicOutlinedIcon />
              </div>
              <div>
                <p className="text-2xl font-bold">Call with Whatsapp</p>
                <p className="text-[#D1D1D1]">+234 1234 5678 9087</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-[80%] mx-auto md:flex gap-5 mt-8">
          <div className="flex-1 bg-[#4D4D4D4D] p-3 rounded-lg">
            <div className="flex gap-3 items-center">
              <div className="bg-[#4D4D4D4D] bg-opacity-30 p-2 rounded-full">
                <Mails />
              </div>
              <div>
                <p className="text-2xl font-bold">Send a mail</p>
                <p className="text-[#D1D1D1]">
                  Reach out to our support through mail
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#4D4D4D4D] p-3 rounded-lg">
            <div className="flex gap-3 items-center">
              <div className="bg-[#4D4D4D4D] bg-opacity-30 p-2 rounded-full">
                <HeadsetMicOutlinedIcon />
              </div>
              <div>
                <p className="text-2xl font-bold">Speak on call</p>
                <p className="text-[#D1D1D1]">
                  Get on call with support to get swift response
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#4D4D4D4D] p-3 rounded-lg">
            <div className="flex gap-3 items-center">
              <div className="bg-[#4D4D4D4D] bg-opacity-30 p-2 rounded-full">
                <MessagesSquareIcon />
              </div>
              <div>
                <p className="text-2xl font-bold">Chat with us</p>
                <p className="text-[#D1D1D1]">
                  Start a conversation with our support on whatsapp
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className=" hidden md:block my-8 text-2xl font-bold text-center">
          Articles to help you out
        </p>
        <div className="hidden md:block w-[80%] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="bg-[#4D4D4D4D] px-5 border-none rounded-lg mb-3"
            >
              <AccordionTrigger className="text-2xl">
                Help with sign up
              </AccordionTrigger>
              <AccordionContent className="text-[#D1D1D1] text-justify">
                If you need help signing up, start by clicking the "Sign Up"
                button on our homepage or app login screen. Enter your personal
                details, such as your name and email, and follow the prompts to
                complete the form. You will then receive the a verification code
                via email or SMS- enter this code to confirm your account. After
                verification, you can follow any additional steps to personalize
                your profile, and you are all set! if you run into any issues
                along the way, do not hesitate to contact our support team, and
                we will be happy to assist you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-[#4D4D4D4D] px-5 border-none rounded-lg mb-3"
            >
              <AccordionTrigger className="text-2xl">
                Help with sign up
              </AccordionTrigger>
              <AccordionContent className="text-[#D1D1D1] text-justify">
                If you need help signing up, start by clicking the "Sign Up"
                button on our homepage or app login screen. Enter your personal
                details, such as your name and email, and follow the prompts to
                complete the form. You will then receive the a verification code
                via email or SMS- enter this code to confirm your account. After
                verification, you can follow any additional steps to personalize
                your profile, and you are all set! if you run into any issues
                along the way, do not hesitate to contact our support team, and
                we will be happy to assist you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-[#4D4D4D4D] px-5 border-none rounded-lg mb-3"
            >
              <AccordionTrigger className="text-2xl">
                Help with sign up
              </AccordionTrigger>
              <AccordionContent className="text-[#D1D1D1] text-justify">
                If you need help signing up, start by clicking the "Sign Up"
                button on our homepage or app login screen. Enter your personal
                details, such as your name and email, and follow the prompts to
                complete the form. You will then receive the a verification code
                via email or SMS- enter this code to confirm your account. After
                verification, you can follow any additional steps to personalize
                your profile, and you are all set! if you run into any issues
                along the way, do not hesitate to contact our support team, and
                we will be happy to assist you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Page;
