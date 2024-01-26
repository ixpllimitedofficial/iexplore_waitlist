import MapImage from "@/assets/img/SpotDetails/MapImage.png";
import Image from "next/image";
import ShareIcon from "@/assets/svg/SpotDetailsSvg/ShareIconSvg.svg";
import BookmarkIcon from "@/assets/svg/SpotDetailsSvg/BookmarkIconSvg.svg";
import GetApp from "@/components/App/Home/GetApp/GetApp";

const Directions = () => {
  return (
    <>
      <section className="px-5">
        {/* title and icons */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-[#E1BD8A] text-3xl font-bold">Club Quilox</h1>

          <div className="flex gap-2">
            <Image src={ShareIcon} alt="ShareIcon" height={45} />
            <Image src={BookmarkIcon} alt="BookmarkIcon" height={45} />
          </div>
        </div>

        <Image src={MapImage} alt="MapImage" className="w-full" />
      </section>

      {/* get app */}
      <GetApp />
    </>
  );
};

export default Directions;
