import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import "./Widget.css";
const Widget = () => {
  return (
    <div className="widget" style={{ flex: "0.3" }}>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1515950080980832260"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="GokulRamanan10"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "GokulRamanan10" }}
        />
      </div>
    </div>
  );
};

export default Widget;
