import Image from "next/image";
import SoundIcon from "@/assets/svg/SpotDetailsSvg/SoundsIconSvg.svg";
import StrippersIconSvg from "@/assets/svg/SpotDetailsSvg/StrippersIconSvg.svg";
import ReservationsIconSvg from "@/assets/svg/SpotDetailsSvg/ReservationsIconSvg.svg";
import SecurityIconSvg from "@/assets/svg/SpotDetailsSvg/SecurityIconSvg.svg";
import PaymentIconSvg from "@/assets/svg/SpotDetailsSvg/PaymentIconSvg.svg";
import Link from "next/link";

const SpotFeatures = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-14 items-center justify-center mt-14">
        <div className="flex flex-col items-center gap-4">
          <Image src={SoundIcon} alt="SoundIcon" height={80} />
          <p className="text-xl text-[#E1BD8A]">Best sounds</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Image src={StrippersIconSvg} alt="StrippersIconSvg" height={80} />
          <p className="text-xl text-[#E1BD8A]">Strippers</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Image
            src={ReservationsIconSvg}
            alt="ReservationsIconSvg"
            height={80}
          />
          <p className="text-xl text-[#E1BD8A]">Reservations</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Image src={SecurityIconSvg} alt="SecurityIconSvg" height={80} />
          <p className="text-xl text-[#E1BD8A]">Security</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Image src={PaymentIconSvg} alt="PaymentIconSvg" height={80} />
          <p className="text-xl text-[#E1BD8A]">Payments</p>
        </div>
      </div>

      <Link href="/spot-details/features" className="mt-10">
        <p className=" text-xl text-[#E1BD8A] border-2 border-[#E1BD8A] rounded-2xl py-3 px-5">
          See all features
        </p>
      </Link>
    </div>
  );
};

export default SpotFeatures;
