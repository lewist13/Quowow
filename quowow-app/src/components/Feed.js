import React from "react";
import "../styles/Feed.css";
import QuowowBox from "./QuowowBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <QuowowBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
