import React from "react";
import Image from "next/image";
import CardImage from "@/assets/img/VendorPage/partyPics.jpg";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import Button from "@/components/UI/Button/AppButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import TelegramIcon from "@mui/icons-material/Telegram";
import CloseIcon from "@mui/icons-material/Close";
import { StaticImageData } from "next/image";
import CommentCard from "@/components/vendor-components/FeedRoute/CommentCard/page";
import PostShare from "@/components/vendor-components/FeedRoute/PostShare/page";

interface statusProps {
  statusMainImg: StaticImageData | string;
  statusProfileImg: StaticImageData | string;
  name?: string;
  timestamp?: string;
  statusMessage?: string;
  likes?: string;
  comments?: string;
  shares?: string;
  isFollowing: boolean;
  showMiniContent?: boolean;
  showPostShare?: boolean;
  miniContentType?: string;
  handleFollow?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComment?: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleShare?: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleLikes?: (event: React.MouseEvent<HTMLDivElement>) => void;
  closeComment?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  closeShare?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  isSharePanelVisible?: boolean;
}
const Page: React.FC<statusProps> = ({
  statusMainImg,
  statusProfileImg,
  name,
  timestamp,
  statusMessage,
  likes,
  comments,
  shares,
  handleFollow,
  isFollowing,
  showMiniContent,
  showPostShare,
  handleComment,
  handleLikes,
  closeComment,
  closeShare,
  handleShare,
  isSharePanelVisible,
}) => {
  return (
    <section className="md:relative md:mx-auto md:w-[50%]">
      <div className="relative w-[400px] h-[700px] rounded-lg">
        <Image
          src={statusMainImg}
          width={400}
          height={700}
          alt="card image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute bottom-2 w-[100%]">
          <div className="px-6 md:px-3 flex justify-between items-end">
            <div className="w-[80%]">
              <div className="flex gap-3 mb-3">
                <div>
                  <Image
                    src={statusProfileImg}
                    width={50}
                    height={50}
                    alt="profile image"
                  />
                </div>
                <div>
                  <p>{name}</p>
                  <p>{timestamp}</p>
                </div>
                <div>
                  <Button
                    handleClick={handleFollow}
                    btnText={isFollowing ? "Unfollow" : "Follow"}
                    className="px-5 py-1"
                  />
                </div>
              </div>
              <p className="truncate multiline-2">{statusMessage}</p>
            </div>
            <div className="w-[20%] flex flex-col gap-2 justify-end items-end">
              <div onClick={handleLikes} className="cursor-pointer">
                <p className="text-white">
                  <FavoriteIcon />
                </p>
                <p>{likes}</p>
              </div>
              <div onClick={handleComment} className="cursor-pointer">
                <p className="text-white">
                  <CommentIcon />
                </p>
                <p>{comments}</p>
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
      </div>

      {showMiniContent && <CommentCard closeComment={closeComment} />}
      {showPostShare && (
        <PostShare closeShare={closeShare} isSharePanelVisible={isSharePanelVisible} />
      )}
    </section>
  );
};

export default Page;
