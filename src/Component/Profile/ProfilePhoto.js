import React from "react";
import profilephoto from "../Assets/malik.jpg";
import "./Profile.css";
const ProfilePhoto = () => {
  return (
    <div>
      <img className="mytof" src={profilephoto} alt="tof" />
    </div>
  );
};

export default ProfilePhoto;
