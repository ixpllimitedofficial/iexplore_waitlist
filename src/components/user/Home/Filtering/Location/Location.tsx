import AppInput from "@/components/UI/Inputs/AppInput";
import LocationIcon from "@/assets/svg/LocationIcon.svg";
import Image from "next/image";
import AppSearchInput from "@/components/UI/Inputs/AppSearchInput";

const Location = () => {
  return (
    <section>
      {/* search */}
      <div className="w-[90vw] md:w-[70vw] mx-auto mt-5">
        <AppSearchInput className="p-1 bg-brandDarkNeutral" />
      </div>

      <div className="bg-brandDarkNeutral w-[85vw] md:w-[70vw] p-5 mx-auto mt-5 rounded-2xl">
        <div className="flex flex-col gap-5">
          {/* location 1 */}
          <div className="flex items-center">
            <Image
              src={LocationIcon}
              alt="location icon"
              className="h-[30px]"
            />

            <div>
              <h1 className="font-semibold text-gold-500">Lagos night club</h1>
              <p className="text-gold-600 text-sm">Ikoyi, Lagos</p>
            </div>
          </div>

          {/* divider */}
          <div className="border-t-2 border-gold-500 flex-grow"></div>

          {/* lcoation 2 */}
          <div className="flex items-center">
            <Image
              src={LocationIcon}
              alt="location icon"
              className="h-[30px]"
            />

            <div>
              <h1 className="font-semibold text-gold-500">Abuja night club</h1>
              <p className="text-gold-600 text-sm">Gwagalada, Abuja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
