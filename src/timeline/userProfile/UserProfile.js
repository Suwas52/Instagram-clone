import React from "react";
import "./UserProfile.css";

function UserProfile({ username, account_name, user_image }) {
  return (
    <div className="user__profile">
      <div className="username__left">
        <div className="avatar">
          <img src={user_image} alt="user" />
        </div>
        <div className="username__info">
          <span className="username">{username}</span>
          <span className="account_name">{account_name}</span>
        </div>
      </div>
      <button className="follow__btn">Switch</button>
    </div>
  );
}

export default UserProfile;
