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

const EditSpotDetailsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="col-end-12">
        <Button className="bg-gold-800 text-gold-500">
          <p>Edit</p>
          <Image src={EditOutlineIconSvg} alt="edit icon" className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px] bg-[#212121]">
        <DialogHeader>
          <DialogTitle className="text-gold-500 text-2xl text-center">
            Edit spot details
          </DialogTitle>
          {/* <DialogDescription>
          Make changes to your profile here. Click save when you are done.
        </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] p-2 text-center text-gold-500 font-semibold">
            Spot Information
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] p-2 text-center text-gold-500 font-semibold">
            Spot details
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

export default EditSpotDetailsDialog;
