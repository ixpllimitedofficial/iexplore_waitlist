"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/UI/Button/AppButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import TelegramIcon from "@mui/icons-material/Telegram";
import CloseIcon from "@mui/icons-material/Close";
import CommentCard from "@/components/vendor-components/FeedRoute/CommentCard/page";
import MobileCommentCard from "@/components/vendor-components/FeedRoute/CommentCardMobile/page";
import PostShare from "@/components/vendor-components/FeedRoute/PostShare/page";
import MobilePostShare from "@/components/vendor-components/FeedRoute/MobilePostShare/page";
import { StaticImageData } from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface Media {
  type: "image" | "video";
  content: string;
}

interface User {
  avatar: string;
  name: string;
}

interface Item {
  media: Media[];
  user: User;
  likes: string;
  comments: string;
  caption: string;
  createdAt: Date | undefined; // Allowing createdAt to be undefined
}

interface StatusProps {
  item?: Item;
  statusProfileImg: StaticImageData | string;
  name?: string;
  timestamp?: string;
  statusMessage?: string;
  likes?: string;
  comments?: string;
  shares?: string;
  isFollowing: boolean;
  handleFollow?: () => void;
  handleComment?: () => void;
  handleShare?: () => void;
  handleLikes?: () => void;
  closeComment?: () => void;
  closeShare?: () => void;
  showMiniContent?: boolean;
  showPostShare?: boolean;
  isSharePanelVisible?: boolean;
  onRemove?: () => void;
}

const Page: React.FC<StatusProps> = ({
  item = {
    media: [],
    user: {
      avatar: "",
      name: "",
      likes: "",
      comments: "",
      caption: "",
      createdAt: undefined,
    },
  },
  statusProfileImg,
  name = "Unknown User",
  timestamp = "N/A",
  statusMessage = "No status message",
  likes = "0",
  comments = "0",
  shares = "0",
  isFollowing,
  handleFollow,
  handleComment,
  handleShare,
  handleLikes,
  closeComment,
  closeShare,
  showMiniContent,
  showPostShare,
  isSharePanelVisible,
  onRemove,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clientTimestamp, setClientTimestamp] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  const {
    media,
    user,
    likes: itemLikes,
    comments: itemComments,
    caption,
    createdAt,
  } = item;

  useEffect(() => {
    // Set client-side timestamp to avoid hydration mismatch
    if (createdAt) {
      setClientTimestamp(new Date(createdAt).toLocaleTimeString());
    }
  }, [createdAt]);

  useEffect(() => {
    if (createdAt) {
      // Calculate the expiration time (24 hours)
      const expirationTime =
        new Date(createdAt).getTime() + 24 * 60 * 60 * 1000;
      const now = Date.now();

      if (now >= expirationTime) {
        setIsExpired(true);
        if (onRemove) onRemove(); // Call the parent function to remove the component
      } else {
        // Set a timeout to mark as expired exactly when the 24 hours are up
        const timeout = setTimeout(() => {
          setIsExpired(true);
          if (onRemove) onRemove(); // Call the parent function
        }, expirationTime - now);

        return () => clearTimeout(timeout); // Clean up timeout
      }
    }
  }, [createdAt, onRemove]);

  if (isExpired) {
    return null; // Don't render the component if it's expired
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      media.length > 1 ? (prev + 1) % media.length : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      media.length > 1 ? (prev === 0 ? media.length - 1 : prev - 1) : 0
    );
  };

  const renderMedia = () => {
    if (!media || media.length === 0) return <p>No media available.</p>;
    const currentMedia = media[currentIndex];
    if (currentMedia.type === "image") {
      return (
        <Image
          src={currentMedia.content}
          width={400}
          height={700}
          alt="card media"
          className="w-full h-screen md:h-[700px] object-cover rounded-2xl"
        />
      );
    }
    if (currentMedia.type === "video") {
      return (
        <video
          width={400}
          height={700}
          className="w-full h-screen md:h-[700px] object-cover rounded-2xl"
          autoPlay
          controls
          loop
        >
          <source src={currentMedia.content} type="video/mp4" />
        </video>
      );
    }
    return null;
  };

  return (
    <section className="md:relative md:mx-auto md:w-[50%]">
      <div className="relative w-full h-screen md:w-[400px] md:h-[700px] rounded-lg">
        {renderMedia()}
        {media.length > 1 && (
          <div className="absolute top-[50%] w-full flex justify-between items-center">
            <button
              onClick={handlePrev}
              className="nav-btn left-6 bg-[#4D4D4D] rounded-full hover:bg-gold-500 hover:text-brandDark ml-4 md:-ml-6"
            >
              <KeyboardArrowLeftIcon />
            </button>
            <button
              onClick={handleNext}
              className="nav-btn left-6 bg-[#4D4D4D] rounded-full hover:bg-gold-500 hover:text-brandDark mr-4 md:-mr-6"
            >
              <KeyboardArrowRightIcon />
            </button>
          </div>
        )}
        <div className="absolute bottom-2 w-full">
          {/* user details */}
          <div className="px-6 md:px-3 flex justify-between items-end">
            <div className="w-[80%]">
              <div className="flex gap-3 mb-3">
                <div>
                  <Image
                    src={user.avatar}
                    width={50}
                    height={50}
                    alt={`${user.name}'s avatar`}
                  />
                </div>
                <div>
                  <p>{user.name}</p>
                  <p>{clientTimestamp}</p>
                </div>
                <div>
                  <Button
                    handleClick={handleFollow}
                    btnText={isFollowing ? "Unfollow" : "Follow"}
                    className="px-5 py-1"
                  />
                </div>
              </div>
              <p className="truncate multiline-2">{caption}</p>
            </div>
            <div className="w-[20%] flex flex-col gap-2 justify-end items-end">
              <div onClick={handleLikes} className="cursor-pointer">
                <p className="text-white">
                  <FavoriteIcon />
                </p>
                <p>{itemLikes || likes}</p>
              </div>
              <div onClick={handleComment} className="cursor-pointer">
                <p className="text-white">
                  <CommentIcon />
                </p>
                <p>{itemComments || comments}</p>
              </div>
              <div onClick={handleShare} className="cursor-pointer">
                <p className="text-white">
                  <TelegramIcon />
                </p>
                <p>{shares}</p>
              </div>
            </div>
          </div>
        </div>
        {showMiniContent && <CommentCard closeComment={closeComment} />}
        {showMiniContent && <MobileCommentCard closeComment={closeComment} />}
        {showPostShare && (
          <PostShare
            closeShare={closeShare}
            isSharePanelVisible={isSharePanelVisible}
          />
        )}
        {showPostShare && (
          <MobilePostShare
            closeShare={closeShare}
            isSharePanelVisible={isSharePanelVisible}
          />
        )}
      </div>
    </section>
  );
};

export default Page;
