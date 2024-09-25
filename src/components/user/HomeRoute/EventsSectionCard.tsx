import Image from "next/image";
import RecommendationImage from "@/assets/img/RecommendationImage.png";
import Link from "next/link";

const EventsSectionCard = () => {
  return (
    <Link href="/user/clubs" className="relative">
      <div className="w-[370px] h-[230px] overflow-hidden">
        <Image src={RecommendationImage} alt="recommendation image" className="object-cover" />
      </div>

      {/* badge */}
      <h1 className="absolute bg-gold-500 text-black px-4 py-1 rounded-3xl right-4 top-4 font-bold">
        Hot 🔥
      </h1>

      {/* text */}
      <div className="absolute left-5 bottom-5 flex flex-col justify-between">
        <h1 className="text-xl font-medium">Omah Lay live at Hotbox</h1>

        <p className="text-[#B0B0B0] font-bold">Hotbox, Oniru. 12th Dec 2024.</p>
      </div>
    </Link>
  );
};

export default EventsSectionCard;
