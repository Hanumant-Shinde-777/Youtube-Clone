import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./ChannelRow.css";

function ChannelRow(image, channel, subs, noOfVideos, description, verified) {
  return 
    <div className="channelRow">
      <AccountCircleRoundedIcon
        className="channel__logo"
        alt={channel}
        src={image}
      />
    </div>;
  
}

export default ChannelRow;
