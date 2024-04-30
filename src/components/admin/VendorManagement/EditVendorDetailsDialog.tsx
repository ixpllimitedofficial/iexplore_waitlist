import Image from "next/image";
import AddIconSvg from "@/assets/svg/AdminIconsSvg/AddIconSvg.svg";
import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";

const EditVendorDetailsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button className="bg-gold-800 text-gold-500">
          <p>Add new vendor</p>
          <Image src={AddIconSvg} alt="add icon" className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px] bg-[#212121]">
        <DialogHeader>
          <DialogTitle className="text-gold-500 text-2xl text-center">
            Add vendor
          </DialogTitle>
          {/* <DialogDescription>
          Make changes to your profile here. Click save when you are done.
        </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] p-2 text-center text-gold-500 font-semibold">
            Personal details
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] p-2 text-center text-gold-500 font-semibold">
            Business details
          </div>
        </div>

        <DialogFooter className="mx-auto">
          <Button
            type="submit"
            className="bg-[#333333] text-gold-500  border-2 border-gold-500"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditVendorDetailsDialog;
