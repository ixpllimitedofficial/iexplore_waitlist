import Image from "next/image";
import RecommendedImage from "@/assets/img/RecommendationImage.png";

const RecommendationsImageCard = () => {
  return (
    <div className="relative">
      <div className="w-[320px]">
        <Image src={RecommendedImage} alt="recommended image" />
      </div>
    </div>
  );
};

export default RecommendationsImageCard;
