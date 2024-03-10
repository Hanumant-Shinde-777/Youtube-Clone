import React from "react";
import ChannelRow from './ChannelRow.css';
import VideoRow from './VideoRow';
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
        image="https://upload.wikimedia.org/
    wikipedia/commons/
    b/bf/
    Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg"
        channel="Shiva"
        verified
        subs="1M"
        noOfVideos={ 117147}
        description="The depiction of Shiva as Nataraja"
      />

      <hr />
      <VideoRow 
       views ="2.m"
       subs="1m"
       description="Change the nature by souranded"
       timestamp="54 sec"
       channel="Shiva"
       title="Elighnment"
       image="https://upload.wikimedia.org/
       wikipedia/commons/
       b/bf/
       Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg"
      />
    </div>
  );
}

export default SearchPage;
