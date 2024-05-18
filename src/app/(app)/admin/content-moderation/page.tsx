import React from "react";
import AllContentsTable from "@/components/admin/ContentModeration/AllContentsTable";
import AllSpotsTable from "@/components/admin/ContentModeration/AllSpotsTable";

const page = () => {
  return (
    <>
      <AllContentsTable />
      <AllSpotsTable />
    </>
  );
};

export default page;
