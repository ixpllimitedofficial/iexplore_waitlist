import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import { Badge } from "@/components/UI/badge";
import VendorsDrinksTable from "./VendorsDrinksTable";
import DownloadIcon from "@/assets/svg/AdminIconsSvg/DownloadIcon.svg";
import EditVendorDetailsDialog from "./EditVendorDetailsDialog";

const VendorDetails = () => {
  return (
    <section className="mt-5">
      <div>
        <div className="flex gap-5 justify-end">
          <Badge className="bg-[#00b69b48] text-[#00B69B] text-sm">
            Active
          </Badge>
          <EditVendorDetailsDialog />
        </div>
      </div>
      {/* vendor details */}
      <div className="mt-5 grid grid-cols-6 gap-6">
        <div className="col-span-2">
          <div className="flex flex-col items-center gap-3  bg-brandDarkNeutral p-4 rounded-2xl">
            <div className="flex items-center w-full gap-3">
              <Image
                src={ProfileImage}
                alt="ProfileImage"
                className="h-[100px] w-auto"
              />

              <div className="">
                <p className="font-bold text-2xl text-gold-500">
                  Christine Brooks
                </p>
                <p className="font-medium">04 Sep 1973</p>
                <p className="text-sm">Joined 5 months ago</p>
              </div>
            </div>

            {/* divider */}
            <div className="border-t-2 border-[#979797] w-full"></div>

            <p className="text-sm">Active: 1hr 30mns ago</p>
          </div>
        </div>

        {/* user details */}

        <div className="col-span-2">
          <div className="flex flex-col gap-3 bg-brandDarkNeutral p-4 rounded-2xl">
            <p className="font-bold text-xl text-gold-500">User details:</p>

            <div className="flex flex-col gap-2">
              <div>
                <p className="text-sm">Phone No:</p>
                <p className="font-semibold text-sm text-gold-500">
                  09123456789
                </p>
              </div>

              <div>
                <p className="text-sm">Email Address:</p>
                <p className="font-semibold text-sm text-gold-500">
                  brookschristine.mail.com
                </p>
              </div>

              <div>
                <p className="text-sm">City:</p>
                <p className="font-semibold text-sm text-gold-500">Lagos</p>
              </div>
            </div>
          </div>
        </div>

        {/* business details */}

        <div className="col-span-2">
          <div className="flex flex-col gap-3 bg-brandDarkNeutral p-4 rounded-2xl">
            <p className="font-bold text-xl text-gold-500">Business details:</p>

            <div className="flex flex-col gap-2">
              <div>
                <p className="text-sm">Spot Name:</p>
                <p className="font-semibold text-sm text-gold-500">Club 77</p>
              </div>

              <div>
                <p className="text-sm">Head Quarters :</p>
                <p className="font-semibold text-sm text-gold-500">
                  21, Mokola Road, VI Lekki, Lagos State.
                </p>
              </div>

              <div>
                <p className="text-sm">Phone No:</p>
                <p className="font-semibold text-sm text-gold-500">
                  09123456789
                </p>
              </div>

              <div>
                <p className="text-sm">Email Address:</p>
                <p className="font-semibold text-sm text-gold-500">
                  brookschristine.mail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-brandDarkNeutral p-5 rounded-2xl">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl text-gold-500">Analytics</p>

          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-auto bg-gold-500 text-[#212121] border-none focus-visible:ring-0">
                <SelectValue placeholder="This week" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
              </SelectContent>
            </Select>

            <Image src={DownloadIcon} alt="download" />
          </div>
        </div>
      </div>

      <VendorsDrinksTable />
    </section>
  );
};

export default VendorDetails;
