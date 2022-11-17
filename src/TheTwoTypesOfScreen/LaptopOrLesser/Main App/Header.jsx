import { Avatar, IconButton } from "@material-ui/core";
import {
  AnnouncementRounded,
  AssignmentIndRounded,
  ChatBubbleOutlineRounded,
  ChatBubbleRounded,
  NotificationsOutlined,
  NotificationsRounded,
} from "@material-ui/icons";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        {/* NOTE Very IMP Line Of Code */}
        {/* ANCHOR For The BreadCrumbs Navigation */}
        {/* {window.location.pathname === "/" ? "Home" : ""} */}

        {/* BreadCrumbs */}
        <div className="breadcrumbs">
          Pages / {/* NOTE Just For Now */} Home {/* This should Be A Link */}
        </div>
        <div className="PageTitle">
          {window.location.pathname === "/" ? "Home" : ""}
          {/* NOTE Just For Now */}
        </div>
      </div>
      <div className="header-right">
        <div className="chat-btn">
          <AssignmentIndRounded />
        </div>
        <div className="chat-btn">
          <ChatBubbleOutlineRounded />
        </div>
        <div className="notification-btn">
          <NotificationsOutlined />
        </div>
        <p className="account-btn">PM{/* Dynamic Rendering */}</p>
      </div>
    </div>
  );
};

export default Header;
