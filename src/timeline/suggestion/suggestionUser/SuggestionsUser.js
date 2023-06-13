import React from "react";
import "./SuggestionsUser.css";

function SuggestionsUser({ username, user_image, relation }) {
  return (
    <div className="suggestion__username">
      <div className="username__left">
        <div className="avatar">
          <img src={user_image} alt="user" />
        </div>
        <div className="username__info">
          <span className="username">{username}</span>
          <span className="relation">{relation}</span>
        </div>
      </div>
      <button className="follow__btn">Follow</button>
    </div>
  );
}

export default SuggestionsUser;
