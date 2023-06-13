import React from "react";
import "./Myday.css";

function Myday({ username, user_image }) {
  return (
    <div className="my__days">
      <div className="myDay__user">
        <img src={user_image} alt="avatar" />
      </div>
      <div className="user__name">
        <span>{username}</span>
      </div>
    </div>
  );
}

export default Myday;
