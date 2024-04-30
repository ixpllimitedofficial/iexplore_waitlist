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

const EditDrinkDetailsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="col-end-12">
        <Button className="bg-[#776751] text-[#F7D098]">
          <p>Edit</p>
          <Image src={EditOutlineIconSvg} alt="edit icon" className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px] bg-[#212121]">
        <DialogHeader>
          <DialogTitle className="text-[#F7D098] text-2xl text-center">
            Edit user details
          </DialogTitle>
          {/* <DialogDescription>
          Make changes to your profile here. Click save when you are done.
        </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] p-2 text-center text-[#F7D098] font-semibold">
            Personal Information
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] p-2 text-center text-[#F7D098] font-semibold">
            Preference
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] p-2 text-center text-[#F7D098] font-semibold">
            Account Status
          </div>
        </div>

        <DialogFooter className="mx-auto">
          <Button
            type="submit"
            className="bg-[#333333] text-[#F7D098]  border-2 border-[#F7D098]"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditDrinkDetailsDialog;
