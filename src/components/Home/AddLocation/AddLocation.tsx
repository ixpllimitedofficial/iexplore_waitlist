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
      className="relative flex items-center justify-center h-[600px] w-[85vw] mx-auto my-10 rounded-3xl bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute w-[70%] text-center flex flex-col justify-center items-center">
        <h1 className="font-medium text-7xl text-center">
          Looking for a cool place you can’t find on{" "}
          <span className="text-[#E1BD8A] italic">iExplore</span>
        </h1>

        <AppButton
          btnText="Add a location to iexplore"
          className="relative mt-10 text-2xl"
          handleClick={() => router.push("/add-location")}
          leftIcon={LocationIconBlack}
        />
      </div>
    </section>
  );
};

export default AddLocation;
