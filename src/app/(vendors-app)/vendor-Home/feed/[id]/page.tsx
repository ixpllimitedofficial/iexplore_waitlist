"use client";
import React, { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PlusIcon } from "lucide-react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import Stories from "@/components/vendor-components/FeedRoute/Stories/Stories";
import StatusCard from "@/components/vendor-components/FeedRoute/StatusCard/page";
import CardImage from "@/assets/img/MainWebsite/AboutVendorImg2.png";
import ImageTwo from "@/assets/img/LandingPage/LandingPageBgImage2.jpeg";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import ShareCard from "@/components/vendor-components/FeedRoute/shareMomentCard/page";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";

type Media = {
  type: "image" | "video";
  content: string | StaticImageData;
};

type User = {
  name: string;
  avatar: string | StaticImageData;
};

type Item = {
  id: string;
  media: Media[];
  user: User;
  caption: string;
  likes: number;
  comments: number;
  createdAt: string | undefined; // Allowing createdAt to be undefined
};
const Page = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showMiniContent, setShowMiniContent] = useState(false);
  const [showPostShare, setShowPostShare] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [feed, setFeed] = useState<Item[]>([
    {
      id: "unique-id-1", // Unique identifier
      media: [
        { type: "image", content: CardImage },
        { type: "video", content: "/heroVid.mp4" },
      ],
      user: { name: "John Doe", avatar: StoryImg },
      caption: "Having a great time!",
      likes: 120,
      comments: 45,
      createdAt: new Date().toISOString(),
    },
    {
      id: "unique-id-2",
      media: [
        { type: "image", content: CardImage },
        { type: "image", content: ImageTwo },
      ],
      user: { name: "Jane Smith", avatar: StoryImg },
      caption: "What a beautiful day!",
      likes: 200,
      comments: 80,
      createdAt: new Date().toISOString(),
    },
  ]);

  const removeFeedItem = useCallback(
    (index: number) =>
      setFeed((prevFeed) => prevFeed.filter((_, i) => i !== index)),
    []
  );
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
      <section className="md:mt-5">
        <div className="fixed z-10 p-4 top-2 md:hidden">
          <Link href="/vendor-Home/feed">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>
        </div>
        <div className="hidden md:block">
          {" "}
          <Stories />
        </div>
        <div className="hidden md:block m-5 z-10">
          <ShareCard />
        </div>

        {feed.length === 0 ? (
          <p>No feed available</p>
        ) : (
          feed.map((item, index) => {
            return (
              <div
                key={item.id}
                className="-mt-5 md:mt-10 mb-5 flex flex-col justify-center items-center"
              >
                <StatusCard
                  item={item}
                  onRemove={() => removeFeedItem(index)}
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
          })
        )}
      </section>
    </div>
  );
};

export default Page;
