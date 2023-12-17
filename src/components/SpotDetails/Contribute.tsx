import Link from "next/link";
import Image from "next/image";

import CameraIcon from "@/assets/svg/SpotDetailsSvg/CameraIconSvg.svg";

const Contribute = () => {
  return (
    <section className=" mt-10">
      <h1 className=" text-2xl font-bold">Contribute</h1>

      <div className="relative bg-[#5D5D5D] h-[300px] mx-auto mt-5  rounded-3xl flex  items-center justify-center"></div>

      <Link href="#" className="flex justify-center">
        <div className="flex items-center gap-2 mt-10 border-2 border-[#E1BD8A] rounded-3xl py-3 px-5">
          <Image src={CameraIcon} alt="CameraIcon" />
          <p className=" text-xl text-[#E1BD8A]">
            Add a photo
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Contribute;
