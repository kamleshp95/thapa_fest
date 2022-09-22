import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card container">
        <div className="left">
          <h4>{props.title}</h4>
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
          <a href="">Learn more</a>
        </div>
        <div className="right">
          <video src={props.video} autoPlay muted />
        </div>
      </div>
    </>
  );
};

export default Card;
