

// error fixed
import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://en.wikipedia.org/wiki/File:Indian_-_Festival_Image_of_Shiva_-_Walters_543084.jpg"
        channel="Shiva"
        verified
        subs="1M"
        noOfVideos={117147}
        description="The depiction of Shiva as Nataraja"
      />

      <hr />
      <VideoRow
        views="2M"
        subs="1m"
        description="Change the nature by souranded"
        timestamp="54 sec"
        channel="Shiva"
        title="Elighnment"
        image="https://en.wikipedia.org/wiki/File:Indian_-_Festival_Image_of_Shiva_-_Walters_543084.jpg"
      />
    </div>
  );
}

export default SearchPage;
