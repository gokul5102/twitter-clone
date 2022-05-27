import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
const SideBar = () => {
  return (
    <div className="sidebar" style={{ flex: "0.3" }}>
      <TwitterIcon className="sidebar__twitterIcon" />
      <SideBarOption active Icon={HomeIcon} text="Home" />
      <SideBarOption Icon={SearchIcon} text="Explore" />
      <SideBarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SideBarOption Icon={MailOutlineIcon} text="Messages" />
      <SideBarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SideBarOption Icon={ListAltIcon} text="Lists" />
      <SideBarOption Icon={PermIdentityIcon} text="Profile" />
      <SideBarOption Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar__tweet">
        Tweet
      </Button>
    </div>
  );
};

export default SideBar;
