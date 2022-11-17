import { Link, OpenInNewRounded } from "@material-ui/icons";
import React from "react";
import "./Announcements.css";

const Announcements = () => {
  return (
    <div className="announcements">
      <div className="announcements-nav">
        <div className="title">Announcements</div>
        <div className="announcements-external-link"><OpenInNewRounded /></div>
      </div>
      <div className="announcements-rendered">
        <div className="announcement">
            <div className="announcement-title">

            </div>
            <div className="announcement-msg">

            </div>
            <div className="announcement-profile">
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
