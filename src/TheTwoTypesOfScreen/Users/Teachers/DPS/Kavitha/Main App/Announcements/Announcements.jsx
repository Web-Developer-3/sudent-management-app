import { OpenInNewRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Announcements.css";
import firebase from "../../../../firebase";

const Announcements = () => {
  const [data, setData] = useState([]);
  const institute = "DPS";
  const teacher = 'Kavitha'
  const timetable = firebase.database().ref("Announcements");

  return (
    <div className="announcements">
      <div className="announcements-nav">
        <div className="title">ANNOUNCEMENTS</div>
        <div className="announcements-external-link">
          <Link>
            <OpenInNewRounded />
          </Link>
        </div>
      </div>
      <div className="announcements-rendered">
        <div className="announcement">
          <div className="announcement-title">Holiday</div>
          <hr />
          <div className="announcement-msg">
            Dear Parents and Students Owing to the incessant rainfall last night
            there is severe water logging on the roads. Our buses are stranded
            and unable to reach the pick up points. Keeping the safety of
            students in mind, we declare a HOLIDAY today (05.09.2022) for our
            students'. We regret the inconvenience caused. Regards PrincipalDear
            Parents and Students Owing to the incessant rainfall last night
            there is severe water logging on the roads. Dear Parents and
            Students Owing to the incessant rainfall
          </div>
          <div className="announcement-profile">
            <div className="profile-icon">PM</div>
            <div className="profile-name">prithesh murugaboopathy</div>
          </div>
        </div>
        <div className="announcement">
          <div className="announcement-title">Holiday</div>
          <hr />
          <div className="announcement-msg">
            Dear Parents and Students Owing to the incessant rainfall last night
            there is severe water logging on the roads. Our buses are stranded
            and unable to reach the pick up points. Keeping the safety of
            students in mind, we declare a HOLIDAY today (05.09.2022) for our
            students'. We regret the inconvenience caused. Regards Principal
          </div>
          <div className="announcement-profile">
            <div className="profile-icon">PM</div>
            <div className="profile-name">prithesh murugaboopathy</div>
          </div>
        </div>
        <div className="announcement">
          <div className="announcement-title">Holiday</div>
          <hr />
          <div className="announcement-msg">
            Dear Parents and Students Owing to the incessant rainfall last night
            there is severe water logging on the roads. Our buses are stranded
            and unable to reach the pick up points. Keeping the safety of
            students in mind, we declare a HOLIDAY today (05.09.2022) for our
            students'. We regret the inconvenience caused. Regards Principal
          </div>
          <div className="announcement-profile">
            <div className="profile-icon">PM</div>
            <div className="profile-name">prithesh murugaboopathy</div>
          </div>
        </div>
        <div className="announcement">
          <div className="announcement-title">Holiday</div>
          <hr />
          <div className="announcement-msg">
            Dear Parents and Students Owing to the incessant rainfall last night
            there is severe water logging on the roads. Our buses are stranded
            and unable to reach the pick up points. Keeping the safety of
            students in mind, we declare a HOLIDAY today (05.09.2022) for our
            students'. We regret the inconvenience caused. Regards Principal
          </div>
          <div className="announcement-profile">
            <div className="profile-icon">PM</div>
            <div className="profile-name">prithesh murugaboopathy</div>
          </div>
        </div>
        <div className="announcement">
          <div className="announcement-title">Holiday</div>
          <hr />
          <div className="announcement-msg">
            Dear Parents and Students Owing to the incessant rainfall last night
            there is severe water logging on the roads. Our buses are stranded
            and unable to reach the pick up points. Keeping the safety of
            students in mind, we declare a HOLIDAY today (05.09.2022) for our
            students'. We regret the inconvenience caused. Regards Principal
          </div>
          <div className="announcement-profile">
            <div className="profile-icon">PM</div>
            <div className="profile-name">prithesh murugaboopathy</div>
          </div>
        </div>
      </div>
      {/* FIXME - This Shall Be Rendered Later!!! */}
    </div>
  );
};

export default Announcements;
