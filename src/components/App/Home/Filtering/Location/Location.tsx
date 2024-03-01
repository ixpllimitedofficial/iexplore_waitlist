import AppInput from "@/components/UI/Inputs/AppInput";
import LocationIcon from "@/assets/svg/LocationIcon.svg";
import Image from "next/image";
import AppSearchInput from "@/components/UI/Inputs/AppSearchInput";

const Location = () => {
  return (
    <section>
      {/* search */}
      <div className="w-[90vw] md:w-[70vw] mx-auto mt-10">
        <AppSearchInput className="p-1" />
      </div>

      <div className="bg-[#333333] w-[85vw] p-5 mx-auto mt-10 rounded-2xl">
        <div className="flex flex-col gap-5">
          {/* location 1 */}
          <div className="flex items-center gap-2">
            <Image
              src={LocationIcon}
              alt="location icon"
              className="h-[35px] md:h-[40px]"
            />

            <div>
              <h1 className="font-semibold text-lg text-[#E1BD8A]">
                Lagos night club
              </h1>
              <p className="mt-1 text-[#FBE9D0]">Ikoyi, Lagos</p>
            </div>
          </div>

          {/* divider */}
          <div className="border-t-2 border-[#F9D9AD] flex-grow"></div>

          {/* lcoation 2 */}
          <div className="flex items-center gap-2">
            <Image
              src={LocationIcon}
              alt="location icon"
              className="h-[35px] md:h-[40px]"
            />

            <div>
              <h1 className="font-semibold text-lg text-[#E1BD8A]">
                Abuja night club
              </h1>
              <p className="mt-1 text-[#FBE9D0]">Gwagalada, Abuja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
