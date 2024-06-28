import MapImage from "@/assets/img/SpotDetails/MapImage.png";
import Image from "next/image";
import ShareIcon from "@/assets/svg/SpotDetailsSvg/ShareIconSvg.svg";
import BookmarkIcon from "@/assets/svg/SpotDetailsSvg/BookmarkIconSvg.svg";
import GetApp from "@/components/user/Home/GetApp/GetApp";

const Directions = () => {
  return (
    <>
      <section className="px-5 md:px-10">
        {/* title and icons */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-gold-500 text-2xl md:text-3xl font-bold">
            Club Quilox
          </h1>

          <div className="flex gap-2">
            <Image src={ShareIcon} alt="ShareIcon" height={45} />
            <Image src={BookmarkIcon} alt="BookmarkIcon" height={45} />
          </div>
        </div>

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3963.97865254587!2d3.376630773156968!3d6.524379293468192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzEnMjcuOCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1719510646730!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <Image src={MapImage} alt="MapImage" className="w-full" />
      </section>

      {/* get app */}
      <GetApp />
    </>
  );
};

export default Directions;
