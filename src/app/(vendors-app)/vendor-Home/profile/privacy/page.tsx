import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import SpotDetails from "@/components/vendor-components/SpotDetails/SpotDetails";
import ReviewsRatings from "@/components/vendor-components/ReviewsRatings/ReviewsRatings";
import Header from "@/components/vendor-components/MiniHeader/Header";
import RatingsIcon from "@/assets/svg/UserIconsSvg/RatingsIcon.svg";
import RatingStarIcon from "@/assets/svg/VendorSvg/star.svg";

const Page = () => {
  return (
    <>
      <Header title="Profile" className="hidden md:block" />
      <section className="px-7 md:py-6">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <p className="text-2xl font-bold md:text-3xl">Privacy Policy</p>
            <p className="text-[#B0B0B0] text-sm">Last updated Jan 30, 2024</p>
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
          <p className="text-xl font-bold">Privacy policy for iexplore</p>
          <div className="md:w-[50%] mt-5">
            <p className="mb-2">
              Welcome to iexplore! This Privacy Policy is designed to help you
              understand how we collect, use, and safeguard your personal
              information when you use our mobile application and related
              services.
            </p>
            <p className="mb-2">
              By using iexplore, you agree to the terms outlined in this Privacy
              Policy.
            </p>
            <p className="mb-3">Information we collect</p>
            <p>1.Personal information</p>
            <p>
              -When you create an account, we may collect your name, email
              address, and other necessary information to provide you with a
              personalized experience.
            </p>
            <p className="mb-4">
              -We may collect payment information if you choose to make in-app
              purchases or subscribe to premium features.
            </p>
            <p>2.Location information</p>
            <p className="mb-4">
              iexplore uses location services to connect you with nearby
              entertainment locations. We collect your device&apos;s location
              data to enhance your experience and provide accurate
              recommendations.
            </p>
            <p>3.Usage Information:</p>
            <p className="mb-4">
              -We collect information about how you interact with the app,
              including the features you use, the content you view, and the time
              spent on the app. This helps us improve our services and provide
              you with relevant content.
            </p>
            <p>4.Device Information:</p>
            <p className="mb-4">
              -We may collect information about your device, including its
              model, operating system, and unique identifiers. This information
              helps us troubleshoot technical issues and optimize our app for
              your device.
            </p>
            <p className="mb-4">How We Use Your Information:</p>
            <p>1.Personalization:</p>
            <p className="mb-4">
              We use your personal information to customize your experience,
              such as providing tailored recommendations based on your
              preferences and location.
            </p>
            <p>2.Communication:</p>
            <p className="mb-4">
              We may use your email address to send important updates,
              newsletters, or promotional offers. You can opt out of promotional
              emails at any time.
            </p>
            <p>3.Transactional Purposes:</p>
            <p className="mb-4">
              If you make in-app purchases, we use your payment information to
              process transactions securely.
            </p>
            <p>4.Improving Our Services:</p>
            <p className="mb-4">
              We analyze user behavior and feedback to enhance our app&apos;s
              functionality, features, and overall user experience.
            </p>
            <p className="mb-4">Data Security</p>
            <p className="mb-4">
              We prioritize the security of your information and employ
              industry-standard measures to protect it. However, no method of
              transmission over the internet or electronic storage is entirely
              secure. Therefore, while we strive to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
            <p className="mb-4">Third-Party Links and Services</p>
            <p className="mb-4">
              Our app may contain links to third-party websites or services.
              Please note that we are not responsible for the privacy practices
              of these third parties. We recommend reviewing their privacy
              policies before interacting with their services.
            </p>
            <p className="mb-4">Changes to This Privacy Policy</p>
            <p className="mb-4">
              We may update our Privacy Policy to reflect changes in our
              practices. We will notify you of any material changes by posting
              the updated Privacy Policy on our website or through the app. We
              encourage you to review this Privacy Policy periodically.
            </p>
            <p className="mb-4">Contact Us</p>
            <p className="mb-4">
              If you have any questions or concerns about these Terms of Use,
              please contact us at [contact@iexplore.com].
            </p>
            <p className="mb-4">
              Thank you for trusting iExplore with your information. We are
              committed to providing you with a secure and enjoyable experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
