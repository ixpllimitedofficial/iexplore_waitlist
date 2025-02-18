"use client";
import React, { useState } from "react";
import Image from "next/image";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import CloseIcon from "@mui/icons-material/Close";

interface CommentProps {
  closeComment?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const Page: React.FC<CommentProps> = ({ closeComment }) => {
  const [replyVisible, setReplyVisible] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [repliesVisible, setRepliesVisible] = useState<{
    [key: number]: boolean;
  }>({});
  const [replyTarget, setReplyTarget] = useState<{
    index: number;
    user: string;
  } | null>(null);

  const handleReplyClick = (index: number, user: string) => {
    setReplyTarget({ index, user });
  };

  const handleViewRepliesClick = (index: number) => {
    setRepliesVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="bg-[#0E0E0E] p-2 border border-[#4D4D4D66] rounded-lg rounded-t-3xl h-[70%] w-[100%] absolute bottom-0 z-10 md:hidden">
      <div className="my-3 text-center flex flex-col justify-center items-center gap-2">
        <span
          onClick={closeComment}
          className="w-12 h-1 bg-[#B0B0B0] cursor-pointer"
        ></span>
        <h1 className="text-2xl font-bold">Comments</h1>
      </div>
      <div className="h-[200px] overflow-y-scroll no-scrollbar whitespace-nowrap">
        {[1, 2, 3, 4, 5].map((message, index) => (
          <div key={index} className="my-2 flex flex-col gap-2">
            <div className="flex items-center gap-5">
              <Image src={StoryImg} width={50} height={50} alt="profile" />
              <div>
                <div className="flex gap-3 items-center">
                  <h1 className="text-xl">Melissa Akintayo</h1>
                  <p className="text-[#B0B0B0] text-sm">4d ago</p>
                </div>
                <p className="text-[#B0B0B0] my-1">
                  Nice vibe happening here 😎
                </p>
                <div className="flex gap-3 items-center cursor-pointer">
                  <p
                    onClick={() => handleReplyClick(index, "Melissa Akintayo")}
                    className="bg-[#4D4D4D] py-1 px-3 rounded-2xl text-[#B0B0B0] border border-[#B0B0B0] text-sm"
                  >
                    Reply
                  </p>
                  <p
                    onClick={() => handleViewRepliesClick(index)}
                    className="text-gold-500 text-sm cursor-pointer"
                  >
                    {repliesVisible[index] ? "Hide replies" : "View 5 replies"}
                  </p>
                </div>
              </div>
            </div>
            {repliesVisible[index] && (
              <div className="flex flex-col gap-2 mt-2 ml-10">
                {[1, 2, 3, 4, 5].map((reply, replyIndex) => (
                  <div key={replyIndex} className="flex items-center gap-2">
                    <div className="w-[10%]">
                      <Image
                        src={StoryImg}
                        width={30}
                        height={30}
                        alt="profile"
                      />
                    </div>
                    <div className="w-[90%]">
                      <div className="flex gap-2 items-center">
                        <h1 className="text-sm">Reply User</h1>
                        <p className="text-[#B0B0B0] text-xs">2d ago</p>
                      </div>
                      <p className="text-[#B0B0B0] text-xs">This is a reply.</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="relative bottom-0 w-[100%] border-t-2 border-[#4D4D4D66] p-2 flex gap-2 items-center">
        <div className="w-[20%]">
          <Image src={StoryImg} width={50} height={50} alt="profile" />
        </div>
        <div className="w-[80%]">
          <input
            type="text"
            className="w-[100%] p-3 rounded-3xl bg-[#4D4D4D]"
            placeholder={
              replyTarget ? `Reply to ${replyTarget.user}` : "Comment"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
