import AllOrdersTable from "@/components/admin/Orders/AllOrdersTable";
import Image from "next/image";
import OrderIconSvg from "@/assets/svg/AdminIconsSvg/OrderIconSvg.svg";


const Page = () => {
  const divStyle =
    "flex items-center justify-between gap-2  xl:gap-4 bg-[#23232325] rounded-2xl border border-[#4D4D4D] w-full h-auto p-4 lg:px- min-h-[88px]";

  return (
    <div className="">
      {/* Responsive grid for stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {/* Card 1: Active Affiliates */}
        <div className={divStyle}>
          <div className="flex items-center justify-center">
            <Image
              src={OrderIconSvg}
              alt="People Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-normal text-gray-300">Total Orders</p>
            <p className="font-bold text-xl text-white">2,000</p>
          </div>
          <span className="bg-[#008800] border border-[#b4ddb4] px-1 py-1.5 rounded-full text-white font-normal text-xs whitespace-nowrap">
            +16% this month
          </span>
        </div>

        {/* Card 2: Total Affiliates */}
        <div className={divStyle}>
          <div className="flex items-center justify-center">
            <Image
              src={OrderIconSvg}
              alt="People Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-normal text-gray-300">Claimed Drinks</p>
            <p className="font-bold text-xl text-white">2,000</p>
          </div>
          <span className="bg-[#E50000] border border-[#b4ddb4] px-2 py-1.5 rounded-full text-white font-normal text-xs whitespace-nowrap">
            -2% last month
          </span>
        </div>

        {/* Card 3: New Vendors */}
        <div className={divStyle}>
          <div className="flex items-center justify-center">
            <Image
              src={OrderIconSvg}
              alt="New Vendors Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-normal text-gray-300">Unclaimed Drinks</p>
            <p className="font-bold text-xl text-white">2,000</p>
          </div>
          <span className="bg-[#E50000] border border-[#b4ddb4] px-2 py-1.5 rounded-full text-white font-normal text-xs whitespace-nowrap">
            -2% last month
          </span>
        </div>
      </div>

      {/* Table section */}
      <div className="mt-8">
        <AllOrdersTable />
      </div>
    </div>
  );
};
export default Page