import React, { useState, useEffect } from "react";
import { useAuth0 } from "../contexts/auth0-context";
import User from "../components/User";
import apiUser from "../utils/apiUser";

export default function Profile() {
  //Destruct user object from Auth0 context and store appropriate fields in dbUser
  const { user } = useAuth0();
  const [dbUser, setUser] = useState({});

  //Grab ID from Auth0 user to make queries to the database
  const userID = user ? user.sub.split("|")[1] : null;

  //When an ID is found, a query is made to MongoDB to grab the record for that user
  useEffect(() => {
    if (userID) {
      loadUserInfo(userID);
    }
    return () => {};
  }, [user, userID]);

  //API call to grab record
  const loadUserInfo = (id) => {
    apiUser
      .findUser(id)
      .then((res) => {
        setUser({
          name: res.data.name,
          email: res.data.email,
          picture: res.data.image,
          id: res.data.auth0_id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/*Render User with dbUser object containing user info*/}
      <User dbUser={dbUser} />
    </>
  );
}
