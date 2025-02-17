import Link from "next/link";
import Image from "next/image";
import AutoSlide from "@/components/admin/auth/AutoSlide"
import AdminSvg from "@/assets/svg/NavbarSvg/AdminSvg.svg";
import OnboardingImage from "@/assets/svg/OnbordingSvg.svg";
import AdminLoginForm from "@/components/admin/auth/AdminLoginForm"

const page = () => {
    return (
        <section className="min-h-screen flex flex-col items-center bg-[#1A1A1A] px-6 sm:px-10">
            {/* Logo */}
            <div className="w-full max-w-7xl py-6">
                <Image src={AdminSvg} alt="iExplore Logo" height={45} />
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-12 justify-between items-center w-full max-w-7xl">
                {/* Onboarding Image */}
                <div className='w-full lg:w-2/5 md:mb-5'>
                    <AutoSlide />
                </div>
                {/* Login Form */}
                <div className="w-full lg:w-2/4 ">
                    <AdminLoginForm />
                </div>
            </div>
        </section>
    );
};

export default page;
