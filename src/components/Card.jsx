import React from "react";

function Card(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emo}
          </span>
          <span>{props.key}</span>
        </dt>
        <dd>{props.meaning}</dd>
      </div>
    </dl>
  );
}

export default Card;
