import React from "react";
import "./Suggestion.css";
import SuggestionsUser from "./suggestionUser/SuggestionsUser";
import { SuggestionUser } from "./../userData/SuggestionUser";
function Suggestion() {
  return (
    <div className="suggestions">
      <div className="suggestions_top">
        <div className="suggestions__title">Suggested for you</div>
        <button className="suggestions__more">See all</button>
      </div>

      {SuggestionUser.map((suggestUser) => (
        <SuggestionsUser
          username={suggestUser.username}
          user_image={suggestUser.user_image}
          relation={suggestUser.relation}
        />
      ))}
    </div>
  );
}

export default Suggestion;
