import Image from "next/image";
import RadioCircleIcon from "@/assets/svg/RadioCircleIcon.svg";

const Ratings = () => {
  return (
    <section className="bg-[#333333] w-[80vw] md:w-[50vw] p-5 mx-auto mt-10 rounded-2xl flex flex-col gap-5">
      {/* first rating */}
      <div className="flex items-center gap-3">
        <Image src={RadioCircleIcon} alt="RadioCircleIcon" className="h-[20px]" />
        <p className="font-medium text-xl md:text-xl text-[#E1BD8A]">5 Star</p>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <>
                <div
                  key={star}
                  className="bg-[#E1BD8A] rounded-full h-3 w-3 "
                ></div>
              </>
            );
          })}
        </div>
      </div>

      {/* divider */}
      <div className="border-t-2 border-[#F9D9AD] flex-grow"></div>

      {/* second rating */}
      <div className="flex items-center gap-3">
        <Image src={RadioCircleIcon} alt="RadioCircleIcon" className="h-[20px]" />
        <p className="font-medium text-xl md:text-xl text-[#E1BD8A]">5 Star</p>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <>
                <div
                  key={star}
                  className="bg-[#E1BD8A] rounded-full h-3 w-3"
                ></div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
