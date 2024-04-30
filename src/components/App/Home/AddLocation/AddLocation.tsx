"use client";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import AddLocationImage from "@/assets/img/AddLocationImage.png";
import LocationIconBlack from "@/assets/svg/LocationIconBlack.svg";

const AddLocation = () => {
  const router = useRouter();

  return (
    <section
      style={{ backgroundImage: `url(${AddLocationImage.src})` }}
      className="relative flex items-center justify-center h-[250px] md:h-[400px] lg:h-[500px] w-[90vw] md:w-[85vw] lg:w-[75vw] mx-auto my-10 rounded-3xl bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute w-[95%] lg:w-[65%] text-center flex flex-col justify-center items-center">
        <h1 className="font-medium text-2xl md:text-5xl text-center">
          Looking for a cool place you can’t find on{" "}
          <span className="text-gold-500 italic">iExplore.</span>
        </h1>

        <AppButton
          btnText="Add a location to iExplore"
          className="relative mt-3 lg:mt-5 text-sm md:text-base"
          handleClick={() => router.push("/user/add-location")}
          leftIcon={LocationIconBlack}
        />
      </div>
    </section>
  );
};

export default AddLocation;
