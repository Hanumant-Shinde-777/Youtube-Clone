import React, { useState } from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
const [inputSearch, setInputSearch] = useState ('');

  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        ></img>
      </div>

      <div className="header__input">
        <input  onChange={e =>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <CircleNotificationsIcon className="header__icon"/>
        <AccountCircleIcon
          alt="User"
          src="https://www.freeiconspng.com/uploads/account-icon-5.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
