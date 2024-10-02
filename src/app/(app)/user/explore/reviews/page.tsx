import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";

const page = () => {
  return (
    <section className="px-7 pb-5">
      <div className="flex items-center">
        <Link href="/user/explore/1">
          <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
        </Link>

        <div className="flex justify-center items-center gap-3 w-full">
          <p className=" font-bold text-3xl">All reviews</p>
        </div>
      </div>

      {/*  */}
      <div className="mt-8 grid grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card) => {
          return (
            <div className="flex gap-2" key={card}>
              <div className="">
                <div className="bg-[#4D4D4D66] h-[60px] w-[60px] rounded-full"></div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <div>
                  <p className="text-xl font-bold">Victor Adewale</p>
                  <p className="text-[#B0B0B0]">August 2024</p>
                </div>

                <p className="text-lg col-span-2">
                  Best place to enjoy nightlife in Lagos. Sound is perfect
                  security is on point and there was no problem with finding a
                  parking space. Got to see and had some premium drinks there,
                  definitely can’t wait to be back here.
                </p>

                <p className="text-[#B0B0B0]">Was this review helpful?</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;
