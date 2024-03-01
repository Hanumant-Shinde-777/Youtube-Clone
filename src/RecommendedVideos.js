import React from 'react'
import VideoCard from './VideoCard'
import "./RecommendedVideos.css";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
        <h2> recmmonded</h2>
        <div className="recommendedVideos__video">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          
           </div>
    </div>
  )
}

export default RecommendedVideos;