import React from "react";
import Post from "./Post";
import "./Timeline.css";
import TweetBox from "./TweetBox";

function Timeline() {
  return (
    <div className="timeline">
      {/* header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* post(postは投稿内容だから増えていく) */}
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Timeline;
