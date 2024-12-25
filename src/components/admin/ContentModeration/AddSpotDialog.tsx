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

const AddSpotDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-[196px] bg-transparent text-white rounded-full px-4 py-2 border hover:bg-transparent">
          <p className="text-lg font-bold">Add New Spot</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] md:max-w-[800px] bg-[#212121] p-4 sm:p-6 rounded-xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-3xl font-bold text-center">
            Add Spot Details
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-5">
          <h2 className="text-center text-lg sm:text-xl font-semibold my-3">Spot Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Spot Name"
              className="w-full h-12 sm:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full h-12 sm:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Email address"
              className="w-full h-12 sm:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-12 sm:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
            />
          </div>
          <h2 className="text-center text-lg sm:text-xl font-semibold my-3">Spot Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Features"
              className="w-full h-12 sm:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Operating Hours"
              className="w-full h-12 sm:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Spot description"
              className="w-full h-12 sm:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Business phone number"
              className="w-full h-12 sm:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full sm:w-[440px] h-[200px] mx-auto bg-[#4D4D4D] mt-5 border-2 border-gold-500 border-dotted p-4 sm:p-6 rounded-xl text-center mb-6">
          <div className="flex justify-center items-center">
            <Image src={fileSvg} alt="svg" />
          </div>
          <p className="text-gray-400 text-sm sm:text-base">Choose a file or drag & drop it here</p>
          <p className="text-gray-500 text-xs sm:text-sm">JPEG, PNG, PDF, up to 50MB</p>
          <span className="text-gold-500 cursor-pointer">Browse files</span>
        </div>
        <DialogFooter className="mt-6 text-center">
          <Button
            type="submit"
            className="w-full bg-[#333333] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gold-600 transition"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddSpotDialog;
