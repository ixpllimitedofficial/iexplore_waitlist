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
      <div className="flex flex-wrap gap-14 items-center justify-center mt-14">
        <div className="flex flex-col items-center gap-2">
          <Image src={SoundIcon} alt="SoundIcon" height={60} />
          <p className="text-lg text-gold-500">Best sounds</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image src={StrippersIconSvg} alt="StrippersIconSvg" height={60} />
          <p className="text-lg text-gold-500">Strippers</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image
            src={ReservationsIconSvg}
            alt="ReservationsIconSvg"
            height={60}
          />
          <p className="text-lg text-gold-500">Reservations</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image src={SecurityIconSvg} alt="SecurityIconSvg" height={60} />
          <p className="text-lg text-gold-500">Security</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image src={PaymentIconSvg} alt="PaymentIconSvg" height={60} />
          <p className="text-lg text-gold-500">Payments</p>
        </div>
      </div>

      <Link href="/user/spot-details/features" className="mt-6">
        <p className=" text-gold-500 border-2 border-gold-500 rounded-xl py-2 px-4">
          See all features
        </p>
      </Link>
    </div>
  );
};

export default SpotFeatures;
