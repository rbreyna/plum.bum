import React from "react";
import { useAuth0 } from "../contexts/auth0-context";
import User from "../components/User"

export default function Profile() {

  const { isLoading, user } = useAuth0();

  const name = user ? user.name : null;
  const email = user ? user.email : null;
  const picture = user ? user.picture : null;

  console.log(name, email, picture)
  
  return(
    <>
    {!isLoading && user && (
      <User
      name = {name}
      email = {email}
      picture = {picture}/>
    )}
    </>
  )

}
