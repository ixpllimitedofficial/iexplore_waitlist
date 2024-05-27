import Image from "next/image";

import ExploreDarkLogo from "@/assets/img/iExploreDarkLogo.png";
import FacebookIcon from "@/assets/svg/FacebookIcon.svg";
import InstagramIcon from "@/assets/svg/InstagramIcon.svg";
import TwitterIcon from "@/assets/svg/TwitterIcon.svg";
import LinkedInIcon from "@/assets/svg/LinkedInIcon.svg";

const Footer = () => {
  return (
    <footer className=" bg-gold-500 text-black p-8 lg:py-12 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        <div className="flex flex-col gap-6 lg:w-[45%]">
          {/* logo */}
          <Image src={ExploreDarkLogo} alt="logo" height={70} />

          <p className="leading-relaxed font-medium">
          We are a dynamic and innovative mobile application with root in the nightlife experience market. Our pillars are designed to elevate your night’s experience. We provide all you need in one convenient platform.
          </p>

          {/* icons */}
          <div className="flex gap-3">
            <div className="footerIcon">
              <Image
                src={FacebookIcon}
                alt="FacebookIcon"
                width={35}
                height={35}
              />
            </div>

            <div className="footerIcon">
              <Image
                src={InstagramIcon}
                alt="InstagramIcon"
                width={35}
                height={35}
              />
            </div>

            <div className="footerIcon">
              <Image
                src={TwitterIcon}
                alt="TwitterIcon"
                width={35}
                height={35}
              />
            </div>

            <div className="footerIcon">
              <Image
                src={LinkedInIcon}
                alt="LinkedInIcon"
                width={35}
                height={35}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-14 md:gap-0 justify-between lg:justify-around w-full">
          {/* nav 1 */}
          <div className="flex flex-col gap-3 font-medium lg:pt-20">
            <p>About Us</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>

          {/* nav 2 */}
          {/* <div className="flex flex-col gap-3 font-medium lg:pt-20">
            <p>Support</p>
            <p>Knowledge base</p>
            <p>Live chat</p>
          </div> */}

          {/* nav 3 */}
          <div className="flex flex-col gap-3 font-medium lg:pt-20">
            <p>Jobs</p>
            <p>Our team</p>
            <p>Leadership</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="mt-10 border-t-4 pt-5 flex flex-col gap-4 md:gap-10 md:flex-row justify-between mx-auto">
        <p className="">
          Copyright 2024. iexplore@mail.com. All Rights Reserved.
        </p>

        <p className="">Terms & Conditions</p>

        <p className="">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
