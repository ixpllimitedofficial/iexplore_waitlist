import Image from "next/image";
import RecommendationImage from "@/assets/img/RecommendationImage.png";
import Link from "next/link";

const RecommendedSectionCard = () => {
  return (
    <Link href="/user/spot-details" className="relative">
      <div className="w-[320px]">
        <Image src={RecommendationImage} alt="recommendation image" />
      </div>

      {/* badge */}
      <h1 className="absolute bg-gold-500 text-black font-medium px-4 py-1 rounded-3xl right-4 top-4">
        Hot 🔥
      </h1>

      {/* text */}
      <div className="absolute left-5 bottom-5 flex flex-col justify-between">
        <h1 className="text-xl font-medium">Sweat it out with DJ Vibes</h1>

        <p className="text-[#999999]">
          Live at Eko Atlantic. 12th Dec 2023.
        </p>
      </div>
    </Link>
  );
};

export default RecommendedSectionCard;
