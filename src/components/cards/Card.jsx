import React from "react";

function Card(props) {
  return (
    <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
      <div className="avatar">
        <img src={props.avatar} alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.header}</h5>
        <p className="card-text">{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Card;
