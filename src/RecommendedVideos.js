import React from 'react'
import VideoCard from './VideoCard'
import "./RecommendedVideos.css";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
        <h2> recmmonded</h2>
        <div className="recommendedVideos__video">

          <VideoCard 
          title="Lucifer"
          views="2.3M Views || 2023 2024"
          timestamp="3 Day ago"
          channelImage="https://upload.wikimedia.org/wikipedia
          /commons/thumb/a/a1/Paradise_Lost_19.jpg/
          800px-Paradise_Lost_19.jpg"
          channel="Morning Star"
          image="https://wallpaperaccess.com/full/3428329.png"
          />
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