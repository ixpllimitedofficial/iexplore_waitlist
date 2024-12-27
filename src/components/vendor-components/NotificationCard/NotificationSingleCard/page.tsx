import React from "react";

interface NotificationCardProps {
  isNew: boolean;
  message: string;
  messageContent: string;
  timestamp: string;
  status: string;
}
const Page: React.FC<NotificationCardProps> = ({
  isNew,
  message,
  timestamp,
  messageContent,
  status,
}) => {
  return (
    <div>
      <div
        className={`bg-[#4D4D4D4D] border ${
          isNew ? "border-gold-500" : ""
        } p-3 mb-3 rounded-lg`}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
          <p className="text-lg md:text-2xl font-bold">{message}</p>
          <p className="text-[#B0B0B0] text-sm">{isNew ? "New" : timestamp}</p>
        </div>
        <p className="text-[#B0B0B0] mb-5">
         {messageContent}
        </p>
        <div className="flex gap-3 items-center">
          <p className="bg-[#008800] bg-opacity-30 border border-[#008800] px-8 py-2 rounded-3xl">
            {status}
          </p>
          <p className="bg-[#4D4D4D] bg-opacity-30 border border-[#4D4D4D] px-5 py-2 rounded-3xl">
            #123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
