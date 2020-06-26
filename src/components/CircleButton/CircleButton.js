import React, { Component } from "react";
import "./CircleButton.css";
import Image from "react-bootstrap/Image";

function CircleButton(props) {
  return (
    <Image
      className="Circle-button"
      src={props.src}
      alt={props.alt}
      roundedCircle
    />
  );
}

export default CircleButton;
