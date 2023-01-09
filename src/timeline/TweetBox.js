import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./TweetBox.css";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "学習",
      username: "atsushi",
      verified: "true",
      text: tweetMessage,
      avatar:
        "https://pbs.twimg.com/profile_images/843457072087814144/kTunH2t9_400x400.jpg",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <from>
        <div className="tweetBox__input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="今どうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            value={tweetImage}
            className="tweetBox__imageInput"
            placeholder="画像のURLを入力してください"
            type="text"
            onChange={(e) => setTweetImage(e.target.value)}
          ></input>
        </div>
        <div className="tweetBox__Button">
          <Button
            className="tweetBox__tweetButton"
            type="submit"
            onClick={sendTweet}
          >
            ツイートする
          </Button>
        </div>
      </from>
    </div>
  );
}

export default TweetBox;
