import React from "react";
import "./HeaderCard.css";

const HeaderCard = props => (
    <div className="container">
        <div className="jumbotron">
            <h1>Clicky Game!</h1>
            <h3>Click a character to earn points! Click the same character twice and you lose!</h3>
            <h4>Current Score: {props.points}</h4>
        </div>
    </div>
)
export default HeaderCard;