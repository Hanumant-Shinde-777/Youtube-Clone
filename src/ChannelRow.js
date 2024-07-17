
// package imported
//parameters added 
import React from "react";
import "./ChannelRow.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <AccountCircleRoundedIcon
        className="channel__logo"
        alt={channel}
        src={image}
      />
      <div className="channelRow__text">
        <h4>
          {channel}
          { verified && <AccountCircleRoundedIcon />}
        </h4>
        <p> {subs} subcribers. {noOfVideos} video </p>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default ChannelRow;
