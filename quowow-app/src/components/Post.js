import React from "react";
import "../styles/Post.css";
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

function Post() {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h5>Username</h5>
        <small>Timestamp</small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>Question</p>
          <button className="post__btnAnswer">Answer</button>
        </div>
        <div className="post__answer">
          <p>Answer</p>
        </div>
        <img
          src="https://qphs.fs.quoracdn.net/main-qimg-6c78ed5af6f4e0474a7fc413a75af20f"
          alt=""
        />
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>
        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlinedIcon />
          <MoreHorizOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
