import Image from "next/image";
import TeamMeetingImage from "@/assets/img/LandingPage/AboutUsPage/TeamMeetingImage.png";
import TeamMeetingVideoImage from "@/assets/img/LandingPage/AboutUsPage/TeamMeetingVideoImage.png";
import LandingPageSpiralsImage from "@/assets/img/LandingPage/LandingPageSpiralsImage.png";

const TeamPhotoSection = () => {
  return (
    <section className="relative w-[90vw] mx-auto flex flex-col items-center gap-7 lg:gap-0 lg:flex-row justify-center lg:px-10 pt-14 lg:pt-28 pb-14 lg:pb-40">
      <Image
        src={TeamMeetingImage}
        alt="TeamMeetingImage"
        height={400}
        className="relative lg:left-20"
      />
      <Image
        src={TeamMeetingVideoImage}
        alt="TeamMeetingVideoImage"
        height={400}
        className="relative lg:-left-24 lg:-bottom-24"
      />

      {/* spiral image */}
      <Image
        src={LandingPageSpiralsImage}
        alt="LandingPageSpiralsImage"
        className="absolute top-0 left-0 -z-10"
      />
    </section>
  );
};

export default TeamPhotoSection;
