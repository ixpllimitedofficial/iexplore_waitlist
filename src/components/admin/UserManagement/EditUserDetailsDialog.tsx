import Image from "next/image";
import EditOutlineIconSvg from "@/assets/svg/AdminIconsSvg/EditOutlineIconSvg.svg";
import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";

const EditUserDetailsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="col-end-12">
        <span className="w-[53%] cursor-pointer border border-[#b4ddb4] px-4 py-2 rounded-full text-white text-center font-semibold whitespace-nowrap">
          Edit
        </span>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-screen-sm md:max-w-[800px] bg-[#212121] border border-gold-500 text-white rounded-lg max-h-[600px] overflow-y-auto p-5 lg:p-10">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl text-center">
            Edit user details
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="p-2 text-center text-white font-semibold">
            Personal Information
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Date of Birth"
              className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Preferences Section */}
        <div className="grid gap-4 py-2 justify-center items-center">
          <div className="p-2 text-center text-white font-semibold">
            Preferences
          </div>
          <div className="flex justify-center items-center flex-wrap gap-2">
            {["Bar", "Club", "Beach", "Lounge", "Hotel"].map((pref) => (
              <span
                key={pref}
                className="px-4 py-1.5 bg-[#444444] text- border border-gold-500 rounded-full cursor-pointer hover:bg-gold-500 hover:text-black"
              >
                {pref}
              </span>
            ))}
          </div>
        </div>

        {/* Account Status Section */}
        <div className="grid gap-4 py-2">
          <div className="p-2 text-center text-white font-semibold">
            Account Status
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-2 bg-transparent border border-gold-500 text-white hover:bg-gold-500 hover:text-black rounded-full">
              Active
            </button>
            <button className="px-4 py-2 bg-transparent border border-gold-500 text-white hover:bg-gold-500 hover:text-black rounded-full">
              Disabled
            </button>
          </div>
        </div>

        <DialogFooter className="w-full flex justify-center py-4">
          <Button
            type="submit"
            className="bg-[#444444] hover:bg-gold-500 hover:text-black hover:border-black w-full justify-center items-center rounded-full  text-white border-2 px-6 py-2"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserDetailsDialog;
