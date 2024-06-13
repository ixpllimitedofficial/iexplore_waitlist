import React from "react";

const NotificationCard = () => {
  return (
    <div className="bg-brandDarkNeutral p-4 border-2 border-gold-500 rounded-2xl flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="font-bold text-gold-500">New user verification</p>

        <p className="font-semibold text-sm">Unread</p>
      </div>

      <p className="text-sm">
        Life seasons open have. Air have of. Lights fill after let third
        darkness replenish fruitful let. Wherein set image. Creepeth said above
        gathered bring.
      </p>

      <div className="flex gap-2">
        <p className="bg-[#F9F2F2] text-[#BA1717] px-2 border-2 border-[#E2A1A1] rounded-full text-xs p-1 font-semibold">
          Pending
        </p>

        <p className="bg-[#F9F2F2] text-[#202020] px-2 border-2 border-[#9E9E9E] rounded-full text-xs p-1 font-semibold">
          #123456
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
