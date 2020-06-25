import React from "react";
import { Image } from "react-bootstrap";

function UserImage() {
  return (
    <Image
      className="user-img"
      src="assets/images/user-img.png"
      alt="user-img"
      roundedCircle
    />
  );
}

export default UserImage;
