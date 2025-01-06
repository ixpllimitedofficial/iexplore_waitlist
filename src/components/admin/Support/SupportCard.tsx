import React from "react";

interface NotificationCardProps {
  title: string;
  description: string;
  status: string;
  date: string;
  notificationId: string;
}

const SupportCard: React.FC<NotificationCardProps> = ({
  title,
  description,
  status,
  date,
  notificationId,
}) => {
  return (
    <div className=" bg-[#1A1A1A]  text-white p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-2 space-y-2">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm whitespace-nowrap">{date}</span>
      </div>
      <p className="text-sm">{description}</p>
      <div className="flex gap-4 items-center text-sm text-gray-400 mt-2">
        <span
          className={`text-sm text-white px-2 py-1 rounded-full ${status === "Completed" ? "bg-[#008800]" : "bg-yellow-500"
            }`}
        >
          {status}
        </span>
        <span className=" bg-transparent text-white rounded-full px-4 py-1 border border-[#3a3838] hover:bg-transparent">{notificationId}</span>
      </div>
    </div>
  );
};

export default SupportCard;
