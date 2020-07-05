import React from "react";
import { useAuth0 } from "../contexts/auth0-context";
import User from "../components/User";
import apiUser from "../utils/apiUser";

export default function Profile() {
  const { isLoading, user } = useAuth0();

  let name = "";
  let email = "";

  const picture = user ? user.picture : null;
  const id = user ? user.sub.split("|")[1] : null;

  const loadUserInfo = (id) => {
    apiUser
      .findUser(id)
      .then((res) => {
        console.log("User found!");
        console.log(res);
        name = res.data.name;
        email = res.data.email;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {!isLoading && user && (
        <User name={name} email={email} picture={picture} id={id} />
      )}
    </>
  );
}
