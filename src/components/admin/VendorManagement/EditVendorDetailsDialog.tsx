import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";

const EditVendorDetailsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <span className="w-full md:w-[70%] cursor-pointer border border-[#b4ddb4] px-10 py-2 rounded-full text-white text-center font-semibold whitespace-nowrap">
          Edit
        </span>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[90%] md:max-w-[800px] bg-[#212121] rounded-xl border border-gold-500 md:gap-5">
        <DialogHeader>
          <DialogTitle className="text-white text-xl md:text-2xl text-center">
            Add Vendor
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 px-4 md:px-8">
          {/* Personal Information */}
          <div className="grid gap-4 py-2">
            <div className="p-2 text-center text-white font-semibold">
              Personal Information
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                className="w-full h-[48px] md:h-[64px]"
              />
              <Input
                placeholder="Address"
                className="w-full h-[48px] md:h-[64px]"
              />
              <Input
                placeholder="Email Address"
                className="w-full h-[48px] md:h-[64px]"
              />
              <Input
                placeholder="Phone Number"
                className="w-full h-[48px] md:h-[64px]"
              />
            </div>
          </div>

          {/* Business Details */}
          <div className="grid gap-4 py-2">
            <div className="p-2 text-center text-white font-semibold">
              Business Details
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Business Name"
                className="w-full h-[48px] md:h-[64px]"
              />
              <Input
                placeholder="Business Address"
                className="w-full h-[48px] md:h-[64px]"
              />
              <Input
                placeholder="Business Email Address"
                className="w-full h-[48px] md:h-[64px]"
              />
              <Input
                placeholder="Business Phone Number"
                className="w-full h-[48px] md:h-[64px]"
              />
            </div>
          </div>

          {/* Business Category */}
          <div className="py-4">
            <div className="text-center text-white font-semibold mb-2">
              Business Category
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {["Bar", "Club", "Beach", "Lounge", "Hotel"].map((category) => (
                <span
                  key={category}
                  className="border border-gold-500 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-gold-500 hover:text-[#212121] text-sm md:text-base"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex justify-center items-center">
          <Button
            type="submit"
            className="w-full md:w-[70%] rounded-full py-2 md:py-3 bg-gray-400 justify-center text-white border-2 border-gray-400"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditVendorDetailsDialog;
