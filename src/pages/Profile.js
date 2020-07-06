import React, { useState, useEffect } from "react";
import { useAuth0 } from "../contexts/auth0-context";
import User from "../components/User";
import apiUser from "../utils/apiUser";

export default function Profile() {
  const { isLoading, user } = useAuth0();

  /*   let name = user ? user.name : null;
  let email = "";

  const picture = user ? user.picture : null;
  const id = user ? user.sub.split("|")[1] : null; */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    setName(user ? user.name : null);
    setEmail(user ? user.email : null);
    setPicture(user ? user.picture : null);
    setID(user ? user.sub.split("|")[1] : null);

    if (id) {
      loadUserInfo(id);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (id) {
    return <User name={name} email={email} picture={picture} id={id} />;
  }
  return <></>;
}
