import React from 'react'
import Image from "next/image";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import CloseIcon from "@mui/icons-material/Close";

interface commentProps {
    closeComment?: (event: React.MouseEvent<HTMLSpanElement>) => void; 
}

const Page: React.FC<commentProps> = ({closeComment}) => {
  return (
    <div className="bg-[#0E0E0E] p-2 border border-[#4D4D4D66] rounded-lg w-[70%] absolute bottom-14 -right-[45%]">
    <div className="my-5 text-center flex justify-center items-center gap-10">
      <h1 className="text-2xl font-bold">Comments</h1>
      <span onClick={closeComment} className="border-2 border-white p-1 rounded-full cursor-pointer">
        <CloseIcon />
      </span>
    </div>
    <div className="w-[100%] border border-[#4D4D4D66]"></div>
    <div className="h-[350px] overflow-y-scroll no-scrollbar whitespace-nowrap">
      {[1, 2, 3, 4, 5].map((message) => {
        return (
          <div className="my-2 flex items-center gap-5">
            <div>
              <Image
                src={StoryImg}
                width={50}
                height={50}
                alt="profile"
              />
            </div>
            <div>
              <div className="flex gap-3 items-center">
                <h1 className="text-xl">Melissa Akintayo</h1>
                <p className="text-[#B0B0B0] text-sm">4d ago</p>
              </div>
              <p className="text-[#B0B0B0] my-1">
                Nice vibe happening here 😎
              </p>
              <div className="flex gap-3 items-center cursor-pointer">
                <p className="bg-[#4D4D4D] py-1 px-3 rounded-2xl text-[#B0B0B0] border border-[#B0B0B0] text-sm">
                  Reply
                </p>
                <p className="text-gold-500 text-sm cursor-pointer">
                  View 5 replies
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <div className="relative bottom-0 w-[100%] border-t-2 border-[#4D4D4D66] p-2 flex gap-2 items-center">
      <div className="w-[20%]">
        <Image src={StoryImg} width={50} height={50} alt="profile" />
      </div>
      <div className="w-[80%]">
        <input
          type="text"
          className="w-[100%] p-3 rounded-3xl bg-[#4D4D4D]"
          placeholder="Comment"
        />
      </div>
    </div>
  </div>
  )
}

export default Page