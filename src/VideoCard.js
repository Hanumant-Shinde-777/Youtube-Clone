import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function VideoCard({image, title, channel, views, timestamp,channelImage}) {
  return (
    <div className="videoCard">
     <img src={image} alt="" />
    <div className="videoCard__info">
      <Avatar className ="video__avatar" alt={channel} 
      src={channelImage} />

    </div>
    </div>
  )
}

export default VideoCard