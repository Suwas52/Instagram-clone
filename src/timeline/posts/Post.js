import {
  BookmarkBorder,
  FavoriteBorder,
  ForumRounded,
  MoreHoriz,
  Telegram,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function post({ user, postImage, likes, timestamp, user_profile }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="user">
          <div className="user_profile">
            <img src={user_profile} alt="user" />
          </div>
          {user} • <span> {timestamp}</span>
        </div>
        <div className="MoreHorizIcon">
          <MoreHoriz />
        </div>
      </div>
      <div className="post__image">
        <img src={postImage} alt="image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="postIcon" />

            <ForumRounded className="postIcon" />
            <Telegram className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorder className="postIcon" />
          </div>
        </div>
        liked by {likes} peoples
      </div>
    </div>
  );
}

export default post;
