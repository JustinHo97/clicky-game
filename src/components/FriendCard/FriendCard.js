import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container" onClick={() => props.click(props.id)}>
      <img alt={props.id} src={props.image}/>
    </div>
  </div>
);

export default FriendCard;
