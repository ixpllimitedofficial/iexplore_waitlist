import React from "react";
import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";

const SendNotificationsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="col-end-12">
        <Button className="w-full sm:w-[196px] bg-transparent border-[#3a3838] text-white rounded-full px-4 py-2 border hover:bg-transparent">
          <p className="text-lg font-bold">Send Notification</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-screen-sm md:max-w-[800px] bg-[#212121] max-h-[600px] overflow-y-auto p-4 lg:p-8 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-bold">
            Send Notification
          </DialogTitle>
        </DialogHeader>

        <form className="grid gap-4 py-4 px-2">
          {/* Notification Title */}
          <div>
            <label className="block font-semibold mb-2 text-sm md:text-base">
              Notification Title
            </label>
            <input
              type="text"
              placeholder="Type title"
              className="w-full h-12 md:h-14 bg-[#33333399] border border-[#3a3838] rounded-lg md:rounded-xl p-2 text-white placeholder-gray-400"
            />
          </div>

          {/* Notification Recipient */}
          <div>
            <label className="block font-semibold mb-2 text-sm md:text-base">
              Notification Recipient
            </label>
            <input
              type="email"
              placeholder="Type email address"
              className="w-full h-12 md:h-14 bg-[#33333399] border border-[#3a3838] rounded-lg md:rounded-xl p-2 text-white placeholder-gray-400"
            />
          </div>

          {/* Notification ID and Tag */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* Notification ID */}
            <div className="flex-1">
              <label className="block font-semibold mb-2 text-sm md:text-base">
                Notification ID
              </label>
              <input
                type="text"
                placeholder="Type ID"
                className="w-full h-12 md:h-14 bg-[#33333399] border border-[#3a3838] rounded-lg md:rounded-xl p-2 text-white placeholder-gray-400"
              />
            </div>

            {/* Notification Tag */}
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block font-semibold mb-2 text-sm md:text-base">
                Notification Tag
              </label>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="px-4 py-2 bg-[#33333399] border border-[#3a3838] rounded-full text-center text-sm md:text-base">
                  Completed
                </div>
                <div className="px-4 py-2 bg-[#33333399] border border-[#3a3838] rounded-full text-center text-sm md:text-base">
                  Pending
                </div>
                <div className="px-4 py-2 bg-[#33333399] border border-[#3a3838] rounded-full text-center text-sm md:text-base">
                  Cancelled
                </div>
              </div>
            </div>
          </div>

          {/* Notification Message */}
          <div>
            <label className="block font-semibold mb-2 text-sm md:text-base">
              Notification Message
            </label>
            <textarea
              placeholder="Type message"
              rows={4}
              className="w-full bg-[#33333399] border border-[#3a3838] rounded-lg md:rounded-xl p-2 text-white placeholder-gray-400"
            ></textarea>
          </div>
        </form>

        <DialogFooter>
          <Button
            type="submit"
            className="w-full bg-[#33333399] hover:bg-gold-500 hover:text-black font-semibold border-2 border-[#3a3838] rounded-full py-3 md:py-4"
          >
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SendNotificationsDialog;
