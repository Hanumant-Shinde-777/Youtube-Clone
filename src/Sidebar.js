import React from 'react'
import SidebarRow from './SidebarRow'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className="sidebar">
    

    <SidebarRow selected Icon ={HomeIcon} title ="Home" />
      <SidebarRow Icon ={WhatshotIcon} title ="Trending" />
      <SidebarRow Icon ={SubscriptionsIcon} title ="Subscriptions" />
      <hr />
      <SidebarRow Icon ={VideoLibraryIcon} title ="Libary" />
      <SidebarRow Icon = {HistoryIcon} title ="History" />
      <SidebarRow Icon = {OndemandVideoIcon} title ="Your Video" />
      <SidebarRow Icon = {WatchLaterIcon} title ="Watch Later" />
      <SidebarRow Icon = {ThumbUpAltIcon} title ="Linked VIdeo" />
      <SidebarRow Icon = {ExpandMoreIcon} title ="More Video" />
      <hr />
    </div>
  )
}

export default Sidebar
