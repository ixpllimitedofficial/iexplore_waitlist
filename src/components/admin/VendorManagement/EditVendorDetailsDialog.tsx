import Image from "next/image";
import EditOutlineIconSvg from "@/assets/svg/AdminIconsSvg/EditOutlineIconSvg.svg";
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
      <DialogTrigger asChild className="col-end-12">
        <span className="w-[50%] cursor-pointer border border-[#b4ddb4] px-4 py-2 rounded-full text-white text-center font-semibold whitespace-nowrap">
          Edit
        </span>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px] bg-[#212121]">
        <DialogHeader>
          <DialogTitle className="text-gold-500 text-2xl text-center">
            Edit vendor
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
            className="bg-brandDarkNeutral text-gold-500  border-2 border-gold-500"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditVendorDetailsDialog;
