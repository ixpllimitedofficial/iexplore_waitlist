"use client"
import Onboarding from "@/components/vendor-components/Onboarding/Onboarding";
import Image from "next/image";
import OnboardingBgImage from "@/assets/img/OnboardingBgImage2.png";
import NewAppNavbar from "@/components/UI/AdminUI/Navbar/LoginNavbar/NewAppNavbar";
import AutoSlideCarousel from "@/components/vendor-components/AutoSlideCarousel";
import NewAppSubNavbar from "@/components/UI/AdminUI/Navbar/LoginNavbar/NewAppSubNavbar";
import { useRouter,useSearchParams } from "next/navigation";

type FlowType =
  | "ageConfirmation"
  | "emailConfirmation"
  | "forgotPassword"
  | "confirmOTP"
  | "resetPassword"
  | "checkCode"
  | "signup";

const Page = () => {

  // Ensure that query is available before accessing 'flow'
  const flowParams = useSearchParams().get("flow") as FlowType;

    // Define the flow params where AutoSlideCarousel should be hidden
    const hiddenFlowParams = ["checkCode", "confirmOTP"]; // Add more if needed
  return (
    <>
      <NewAppNavbar sub_title="Vendor" />
      <NewAppSubNavbar
        title={flowParams ? flowParams.toString().replace(/([a-z])([A-Z])/g, '$1 $2') : "Login"}
        className="text-3xl  md:hidden block mt-[20%] -mb-16 text-center capitalize font-bold"
      />
      <section className=" px-5 mt-28 md:px-10 flex flex-col lg:flex-row lg:justify-between gap-10">
        <div className={` w-full lg:w-2/5 ${hiddenFlowParams.includes(flowParams)? "hidden sm:block": ""}`}>
          <AutoSlideCarousel />
        </div>

        <Onboarding />
      </section>
    </>
  );
};

export default Page;
