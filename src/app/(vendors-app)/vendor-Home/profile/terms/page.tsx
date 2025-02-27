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
            <p className="text-2xl font-bold md:text-3xl">Terms of use</p>
            <p className="text-[#B0B0B0] text-sm">Last updated Jan 30, 2024</p>
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
          <p className="text-xl font-bold">Terms of use for iexplore</p>
          <div className="md:w-[50%] mt-5">
            <p className="mb-2">
              Welcome to iExplore! These Terms of Use govern your use of our
              mobile application and related services. By accessing or using
              iExplore, you agree to comply with these terms.
            </p>
            <p className="mb-2">Acceptance of Terms</p>
            <p className="mb-2">
              By using iExplore, you agree to be bound by these Terms of Use and
              all applicable laws and regulations. If you do not agree with any
              part of these terms, you may not use our app.
            </p>
            <p className="mb-2">Use of the App</p>
            <p className="mb-2">
              1.License: We grant you a limited, non-exclusive,
              non-transferable, and revocable license to use iExplore for your
              personal and non-commercial purposes.
            </p>
            <p className="mb-2">
              2.User Accounts: Some features of the app may require you to
              create an account. You are responsible for maintaining the
              confidentiality of your account credentials and for any activity
              that occurs under your account.
            </p>
            <p className="mb-2">
              3.Prohibited Activities:You agree not to engage in any of the
              following activities:
            </p>
            <p>-Violating any laws, regulations, or third-party rights.</p>
            <p>
              -Interfering with or disrupting the app&apos;s functionality or
              servers.
            </p>
            <p>
              -Attempting to access, tamper with, or use non-public areas of the
              app without authorization.
            </p>
            <p className="mb-3">
              -Using the app for any unlawful or fraudulent purpose.
            </p>
            <p className="mb-3">Content and Intellectual Property</p>
            <p className="mb-3">
              1.User Content: You retain ownership of any content you submit or
              upload to iExplore. By posting content, you grant us a worldwide,
              non-exclusive, royalty-free license to use, modify, and distribute
              your content for the purposes of operating and improving the app.
            </p>
            <p className="mb-3">
              2.Intellectual Property: All intellectual property rights in the
              app and its content, including but not limited to trademarks,
              logos, and software, are owned by or licensed to us. You agree not
              to use, modify, reproduce, or distribute any of our intellectual
              property without prior written consent.
            </p>
            <p className="mb-3">Limitation of Liability</p>
            <p>
              1.Disclaimer of Warranties: iexplore is provided on an&quot;as
              is&quot; and &quot;as available&quot; basis, without any warranties of any
              kind, either express or implied. We do not guarantee that the app
              will be error-free, secure, or uninterrupted.
            </p>
            <p className="mb-3">
              2.Limitation of Liability: To the maximum extent permitted by law,
              we shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of iexplore, even if we have been advised of the
              possibility of such damages.
            </p>
            <p className="mb-3">Indemnification</p>
            <p className="mb-3">
              You agree to indemnify and hold harmless iexplore, its affiliates,
              and their respective officers, directors, employees, and agents
              from and against any claims, liabilities, damages, losses, and
              expenses, including legal fees, arising out of or in any way
              connected with your use of the app or violation of these Terms of
              Use.
            </p>
            <p className="mb-3">Changes to the Terms</p>
            <p className="mb-3">
              We reserve the right to update or modify these Terms of Use at any
              time without prior notice. We will notify you of any material
              changes by posting the updated terms within the app. Your
              continued use of iexplore after the posting of changes constitutes
              your acceptance of such changes.
            </p>
            <p className="mb-3">Governing Law</p>
            <p className="mb-3">
              These Terms of Use shall be governed by and construed in
              accordance with the laws of Nigeria, without regard to its
              conflict of law provisions.
            </p>
            <p className="mb-3">Contact Us</p>
            <p className="mb-3">
              If you have any questions or concerns about these Terms of Use,
              please contact us at contact@iexplore.com.
            </p>
            <p className="mb-3">
              Thank you for using iexplore. We hope you enjoy your experience!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
