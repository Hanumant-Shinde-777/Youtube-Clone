import React from "react";
import ChannelRow from "./ChannelRow";
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
    wikipedia/commons/b/bf/Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg"
        channel="Shiva"
        verified
        subs="1M"
        noOfVideos={"117k"}
        description="The depiction of Shiva as Nataraja"
      />
    </div>
  );
}

export default SearchPage;
