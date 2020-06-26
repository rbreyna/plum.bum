import React, { Component } from "react";
import "./PencilButton.css";
import Image from "react-bootstrap/Image";

function PencilButton(props) {
  return <Image className="Pencil-button" src={props.src} alt={props.alt} />;
}

export default PencilButton;
