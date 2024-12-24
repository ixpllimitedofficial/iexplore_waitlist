"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PlusIcon } from "lucide-react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import Stories from "@/components/vendor-components/FeedRoute/Stories/Stories";
import StatusCard from "@/components/vendor-components/FeedRoute/StatusCard/page";
import CardImage from "@/assets/img/VendorPage/partyPics.jpg";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";

const Page = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showMiniContent, setShowMiniContent] = useState(false);
  const [showPostShare, setShowPostShare] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const followMe = () => {
    setIsFollowing(!isFollowing);
    alert("Following");
  };
  const callComment = (index: number) => {
    setShowMiniContent(!showMiniContent);
    setActiveIndex(index);
  };
  const callShare = (index: number) => {
    setShowPostShare(!showPostShare);
    setActiveIndex(index);
  };
  const closeComment = () => {
    setShowMiniContent(false);
  };
  const closeShare = () => {
    setShowPostShare(false);
  };
  const addLikes = (index: number) => {
    alert("Added like to index number " + index);
    setActiveIndex(index);
  };

  return (
    <div>
      <Header title="Feed" className="hidden md:block" />
      <section className="mt-24 md:mt-5">
        <div className="hidden md:block">
          {" "}
          <Stories />
        </div>
        <p className="hidden w-fit mt-10 mx-5 md:flex gap-1 items-center bg-gold-500 py-2 px-5 text-brandDark rounded-3xl cursor-pointer">
          <PlusIcon /> Share moment
        </p>

        {[1, 2, 3].map((status, index) => {
          return (
            <div className="-mt-5 md:mt-10 mb-5 flex flex-col justify-center items-center">
              <StatusCard
                statusMainImg={CardImage}
                statusProfileImg={StoryImg}
                name="Max Smith"
                timestamp="12m ago"
                statusMessage="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, similique!"
                likes="60"
                comments="46"
                shares="26"
                handleFollow={followMe}
                handleComment={() => callComment(index)}
                handleLikes={() => addLikes(index)}
                handleShare={() => callShare(index)}
                showMiniContent={showMiniContent && activeIndex === index}
                showPostShare={showPostShare && activeIndex === index}
                isFollowing={isFollowing}
                closeComment={closeComment}
                closeShare={closeShare}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Page;
