import Image from "next/image";
import RadioCircleIcon from "@/assets/svg/RadioCircleIcon.svg";

const Ratings = () => {
  return (
    <section className="bg-[#333333] w-[80vw] md:w-[50vw] p-5 mx-auto mt-5 rounded-2xl flex flex-col gap-5">
      {/* first rating */}
      <div className="flex items-center ">
        <Image
          src={RadioCircleIcon}
          alt="RadioCircleIcon"
          className="h-[15px]"
        />
        <p className="font-medium text-gold-500">5 Star</p>

        <div className="ml-2 flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <>
                <div
                  key={star}
                  className="bg-gold-500 rounded-full h-2 w-2 "
                ></div>
              </>
            );
          })}
        </div>
      </div>

      {/* divider */}
      <div className="border-t-2 border-gold-500 flex-grow"></div>

      {/* second rating */}
      <div className="flex items-center">
        <Image
          src={RadioCircleIcon}
          alt="RadioCircleIcon"
          className="h-[15px]"
        />
        <p className="font-medium text-gold-500">5 Star</p>

        <div className="ml-2 flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <>
                <div
                  key={star}
                  className="bg-gold-500 rounded-full h-2 w-2"
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
