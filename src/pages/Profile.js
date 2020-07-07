import React, { useState, useEffect } from "react";
import { useAuth0 } from "../contexts/auth0-context";
import User from "../components/User";
import apiUser from "../utils/apiUser";
//import ProgressBar from "../components/ProgressBar/ProgressBar.js";

export default function Profile() {
  const { isLoading, user } = useAuth0();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [id, setID] = useState("");

  const userName = user ? user.name : null;
  const userEmail = user ? user.email : null;
  const userPicture = user ? user.picture : null;
  const userID = user ? user.sub.split("|")[1] : null;

  useEffect(() => {
    if (userID) {
      loadUserInfo(userID);
    }
    return () => {
      console.log("info updated");
    };
  }, [user, id]);

  const loadUserInfo = (id) => {
    apiUser
      .findUser(id)
      .then((res) => {
        console.log("User found!");
        console.log(res);
        setName(res.data[0].name);
        setEmail(res.data[0].email);
        setPicture(res.data[0].image);
        setID(res.data[0].auth0_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (id) {
    return <User name={name} email={email} picture={picture} id={id} />;
  }
  return (
    <>
      {!isLoading && user && (
        <User
          name={userName}
          email={userEmail}
          picture={userPicture}
          id={userID}
        />
      )}
    </>
  );
}
