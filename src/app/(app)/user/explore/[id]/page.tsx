"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";

const page = () => {
  const router = useRouter();

  return (
    <section className="px-5">
      <div className="flex items-center">
        <Image
          src={ArrowLeft}
          alt="ArrowLeft"
          className="justify-start"
          onClick={() => {
            router.back();
          }}
        />

        <div className="flex justify-center items-center gap-3 w-full">
          <p className=" font-bold text-3xl">Maxxa beach bar</p>
          <div className="bg-gold-500 py-1 px-3 rounded-3xl font-bold text-brandDark">4.5</div>
        </div>
      </div>
    </section>
  );
};

export default page;
