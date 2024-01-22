import Image from "next/image";
import TeamMeetingImage from "@/assets/img/LandingPage/AboutUsPage/TeamMeetingImage.png";
import TeamMeetingVideoImage from "@/assets/img/LandingPage/AboutUsPage/TeamMeetingVideoImage.png";
import LandingPageSpiralsImage from "@/assets/img/LandingPage/LandingPageSpiralsImage.png";

const TeamPhotoSection = () => {
  return (
    <section className="relative mx-auto flex justify-center px-10 pt-28 pb-40">
      <Image
        src={TeamMeetingImage}
        alt="TeamMeetingImage"
        height={400}
        className="relative left-20"
      />
      <Image
        src={TeamMeetingVideoImage}
        alt="TeamMeetingVideoImage"
        height={400}
        className="relative -left-24 -bottom-24"
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
