import React from "react";
import { useAuth0 } from "../contexts/auth0-context";
import User from "../components/User";


export default function Profile() {
  const { isLoading, user } = useAuth0();

  const name = user ? user.name : null;
  const email = user ? user.email : null;
  const picture = user ? user.picture : null;
  const id = user ? user.sub.split("|")[1] : null;

  return (
    <>
      {!isLoading && user && (
        <User name={name} email={email} picture={picture} id={id} />
      )}
      {/* <ProgressBar /> */}
    </>
  );
}
