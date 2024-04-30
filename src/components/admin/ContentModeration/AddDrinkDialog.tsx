import Image from "next/image";
import AddIcon from "@/assets/svg/AdminIconsSvg/AddIconSvg.svg";
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

const AddDrinkDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gold-800 text-gold-500">
          <p>Add new drink</p>
          <Image src={AddIcon} alt="add icon" className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px]  bg-[#212121]">
        <DialogHeader>
          <DialogTitle className="text-gold-500 text-2xl text-center">
            Add drink cover:
          </DialogTitle>
          {/* <DialogDescription>
                Make changes to your profile here. Click save when you are done.
              </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-gold-500 border-dotted p-[50px] rounded-xl"></div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div> */}
        </div>
        <DialogHeader>
          <DialogTitle className="text-gold-500 text-2xl text-center">
            Add event details:
          </DialogTitle>
          {/* <DialogDescription>
                Make changes to your profile here. Click save when you are done.
              </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] p-[15px] rounded-xl">
            <p>Drink name</p>
            <p className="text-gold-500 font-bold">Hennessy</p>
          </div>
          <div className="bg-[#33333399] p-[15px] rounded-xl">
            <p>Drink price</p>
            <p className="text-gold-500 font-bold">#2,000,000.00</p>
          </div>
          <div className="bg-[#33333399] p-[15px] rounded-xl">
            <p>Quantity</p>
            <p className="text-gold-500 font-bold">200</p>
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div> */}
        </div>
        <DialogFooter>
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

export default AddDrinkDialog;
