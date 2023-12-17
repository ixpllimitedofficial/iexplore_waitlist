import Image from "next/image";
import ThumbsUpIcon from "@/assets/svg/SpotDetailsSvg/ThumbsUpIconSvg.svg";
import ThumbsDownIcon from "@/assets/svg/SpotDetailsSvg/ThumbsDownIconSvg.svg";

const SingleReview = () => {
  return (
    <section className="py-7">
      <div className="flex gap-3">
        <h3 className="bg-[#E1BD8A] text-[#212121] text-2xl font-bold py-3 px-4 rounded-full grid place-items-center">
          M
        </h3>

        <div>
          <p className="text-2xl text-[#E1BD8A] font-semibold">Max Smith</p>
          <p className="text-[#E1BD8A]">12th Sept 2023</p>
        </div>
      </div>

      <p className="mt-5 text-2xl text-[#E1BD8A] w-[70%]">
        Best place to enjoy nightlife in Lagos. Sound is perfect security is on
        point and there was no problem with finding a parking space. <br />{" "}
        <br /> Got to see and had some premium drinks there, definitely can’t
        wait to be back here.
      </p>

      <div className="mt-5 flex gap-4 items-center">
        <p className="text-2xl text-[#E1BD8A]">Was this review helpful?</p>

        <Image src={ThumbsUpIcon} alt="ThumbsUpIcon" height={40}/>
        <Image src={ThumbsDownIcon} alt="ThumbsDownIcon" height={40}/>
      </div>
    </section>
  );
};

export default SingleReview;
