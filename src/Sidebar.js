import React from 'react'
import SidebarRow from './SidebarRow'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className="sidebar">
    

    <SidebarRow selected Icon ={HomeIcon} title ="Home" />
      <SidebarRow Icon ={WhatshotIcon} title ="Trending" />
      <SidebarRow Icon ={SubscriptionsIcon} title ="Subscriptions" />
      
    </div>
  )
}

export default Sidebar
