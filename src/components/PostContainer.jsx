import React, { useState } from "react";
import profile from "../img/myface.jpeg";
import { BiChevronDown, BiWorld, BiPoll } from "react-icons/bi";
import { AiFillPicture, AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { MdScheduleSend, MdOutlineLocationOn } from "react-icons/md";

const PostContainer = () => {
  const [count, setCount] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="postContainer">
      <div className="postContainerImg">
        <img src={profile} alt="" />
      </div>
      <div className="postContent">
        {toggle && (
          <div className="public">
            <h4>Public </h4>
            <BiChevronDown />
          </div>
        )}
        <div className="inputContainer">
          <textarea
            type="text"
            value={count}
            onFocus={() => setToggle(true)}
            onChange={
              count.length >= 280
                ? () => setCount()
                : (e) => setCount(e.target.value)
            }
            rows={
              count.length >= 241
                ? 6
                : count.length >= 194
                ? 5
                : count.length >= 140
                ? 4
                : count.length >= 90
                ? 3
                : count.length >= 40
                ? 2
                : 1
            }
            placeholder="What's happening?"
          />
          {toggle && (
            <div className="viewContainer">
              <BiWorld />
              <h4>Everyone can reply</h4>
            </div>
          )}
          <div className="iconList">
            <div className="icons">
              <AiFillPicture className="tweetIcon size" />
              <AiOutlineFileGif className="tweetIcon" />
              <BiPoll className="tweetIcon size" />
              <BsEmojiSmile className="tweetIcon" />
              <MdScheduleSend className="tweetIcon size" />
              <MdOutlineLocationOn className="tweetIcon size" />
            </div>
            <div className="tweetBtn">
              <button deactivate>Tweet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
