import React from "react";

function ColouredButton(props) {
  const customStyle = {
    width: props.myProps.width,
    borderRadius: props.myProps.borderRadius,
  };
  return (
    <div
      id={props.myProps.myId}
      className="customButton"
      style={{
        width: `${parseInt(customStyle.width)}rem`,
        borderRadius: parseInt(customStyle.borderRadius),
      }}
    >
      {props.myProps.value}
    </div>
  );
}

export default ColouredButton;
