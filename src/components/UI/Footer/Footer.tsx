import Image from "next/image";

import ExploreDarkLogo from "@/assets/img/iExploreDarkLogo.png";
import FacebookIcon from "@/assets/svg/FacebookIcon.svg";
import InstagramIcon from "@/assets/svg/InstagramIcon.svg";
import TwitterIcon from "@/assets/svg/TwitterIcon.svg";
import LinkedInIcon from "@/assets/svg/LinkedInIcon.svg";

const Footer = () => {
  return (
    <footer className=" bg-[#E1BD8A] text-black p-8 lg:p-14">
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        <div className="flex flex-col gap-6 lg:w-[35%]">
          {/* logo */}
          <Image src={ExploreDarkLogo} alt="logo" height={70} />

          <p className="md:text-lg leading-relaxed">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here.
          </p>

          {/* icons */}
          <div className="flex gap-3">
            <div className="footerIcon">
              <Image
                src={FacebookIcon}
                alt="FacebookIcon"
                className="h-[100px]"
                width={40}
                height={40}
              />
            </div>

            <div className="footerIcon">
              <Image
                src={InstagramIcon}
                alt="InstagramIcon"
                width={40}
                height={40}
              />
            </div>

            <div className="footerIcon">
              <Image
                src={TwitterIcon}
                alt="TwitterIcon"
                width={40}
                height={40}
              />
            </div>

            <div className="footerIcon">
              <Image
                src={LinkedInIcon}
                alt="LinkedInIcon"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* nav 1 */}
        <div className="md:text-lg flex flex-col gap-3 lg:pt-24">
          <p>About Us</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

        {/* nav 2 */}
        <div className="md:text-lg flex flex-col gap-3 lg:pt-24">
          <p>Support</p>
          <p>Knowledge base</p>
          <p>Live chat</p>
        </div>

        {/* nav 3 */}
        <div className="md:text-lg flex flex-col gap-3 lg:pt-24">
          <p>Jobs</p>
          <p>Our team</p>
          <p>Leadership</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      {/* bottom line */}
      <div className="mt-10 border-t-4 pt-5 flex flex-col gap-7 md:flex-row justify-between mx-auto">
        <p className="md:text-lg">
          Copyright 2023. iexplore@mail.com. All Rights Reserved.
        </p>

        <p className="md:text-lg">Terms & Conditions</p>

        <p className="md:text-lg">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
