
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

const AddDrinkDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent text-white rounded-full px-4 py-2 border hover:bg-transparent">
          <p className="text-lg font-bold">Add new drink</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px] bg-[#212121] p-6 rounded-xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* Drink Cover Section */}
        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            Add Drink Cover
          </DialogTitle>
        </DialogHeader>
        <div className="bg-[#33333399] border-2 border-gold-500 border-dotted p-6 rounded-xl text-center mb-6">
          <div className="flex justify-center items-center">
            <Image src={fileSvg} alt="svg" />
          </div>
          <p className="text-gray-400">
            Choose a file or drag & drop it here
          </p>
          <p className="text-gray-500">JPEG, PNG, PDF, up to 50MB</p>
          <span className="text-gold-500 cursor-pointer">Browse files</span>
        </div>

        {/* Drink Details Section */}
        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            Add drink cover
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <div className="">
              <input
                type="text"
                placeholder="Drink Name"
                defaultValue=""
                className="w-full h-[48px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Spot Added"
                defaultValue=""
                className="w-full h-[48px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <div className="">
              <input
                type="number"
                placeholder="Drink Price"
                className="w-full h-[48px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Drink Category"
                defaultValue="Alcoholic"
                className="w-full h-[48px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <div className="">
              <input
                type="text"
                placeholder="Drink Quantity"
                className="w-full h-[48px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Drink Volume"
                className="w-full h-[48px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Drink Description"
              className="w-full h-[48px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Save Button */}
        <DialogFooter className="mt-6 text-center">
          <Button
            type="submit"
            className="w-full bg-[#333333] text-white px-6 py-2 rounded-full hover:bg-gold-600 transition"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDrinkDialog;
