import React from "react";
import ReferralsDetails from "@/components/admin/ReferralManagement/ReferralsDetails";
import { Badge } from "@/components/UI/badge";
import EditAffliateDetailsDialog from "@/components/admin/ReferralManagement/EditAffliateDetailsDialog";

const page = () => {
  return (
    <>
      <div className="mt-5">
        <div className="flex gap-5 justify-end">
          <Badge className="bg-[#00b69b48] text-[#00B69B] text-sm">
            Active
          </Badge>
          <EditAffliateDetailsDialog />
        </div>
      </div>

      <ReferralsDetails />
    </>
  );
};

export default page;
