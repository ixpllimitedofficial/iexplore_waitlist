import Image from "next/image";
import fileSvg from "@/assets/svg/AdminIconsSvg/fileSvg.svg";
import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";

const EditDrinkDetailsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full md:w-[196px] bg-transparent text-white rounded-full px-8 py-2 border hover:bg-transparent">
          <p className="text-lg font-bold">Edit</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px] bg-[#212121] p-4 md:p-6 rounded-xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-3xl font-bold text-center">
            Edit Spot Details
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 md:gap-5">
          <h2 className="text-center my-2 md:my-3 text-sm md:text-base">
            Spot Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
            <div>
              <input
                type="text"
                placeholder="Spot Name"
                defaultValue=""
                className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                defaultValue=""
                className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            <div>
              <input
                type="text"
                placeholder="Email address"
                className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
          </div>

          <h2 className="text-center my-2 md:my-3 text-sm md:text-base">
            Spot Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            <div>
              <input
                type="text"
                placeholder="Features"
                className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Operating Hours"
                className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            <div>
              <input
                type="text"
                placeholder="Spot description"
                className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Business phone number"
                className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[440px] h-[200px] mx-auto bg-[#33333399] mt-4 md:mt-5 border-2 border-gold-500 border-dotted p-4 md:p-6 rounded-xl text-center mb-4 md:mb-6">
          <div className="flex justify-center items-center">
            <Image src={fileSvg} alt="svg" />
          </div>
          <p className="text-sm md:text-base text-gray-400">
            Choose a file or drag & drop it here
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            JPEG, PNG, PDF, up to 50MB
          </p>
          <span className="text-gold-500 text-sm md:text-base cursor-pointer">
            Browse files
          </span>
        </div>
        <DialogFooter className="mt-4 md:mt-6 text-center">
          <Button
            type="submit"
            className="w-full bg-[#333333] text-white px-4 md:px-6 py-2 rounded-full hover:bg-gold-600 transition"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditDrinkDetailsDialog;
