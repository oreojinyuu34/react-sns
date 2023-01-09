import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  // TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>今どうしてる？</h2>
        {/* ライブラリを追加 */}
        {/* <TwitterTweetEmbed tweetId="1264370793426771968" /> */}

        <div className="twitterShareButton">
          <TwitterShareButton url={" "} options={{ text: " " }} />
        </div>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="colisscom"
          options={{ height: 600 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
