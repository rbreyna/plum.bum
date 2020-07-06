import React from "react";
import "./PencilButton.css";
import Image from "react-bootstrap/Image";
import { useAuth0 } from "../../contexts/auth0-context";
import apiUser from "../../utils/apiUser";

function PencilButton(props) {
  const { isLoading, user, loginWithRedirect } = useAuth0();

  const saveUser = (name, email, id, picture) => {
    const info = {
      name: name,
      email: email,
      auth0_id: id,
      image: picture,
    };

    apiUser
      .createUser(info)
      .then((res) => {
        console.log("User created");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="PencilButton-div">
      {/* if there is no user. show the login button */}
      {!isLoading && !user && (
        <>
          <Image
            className="Pencil-button"
            src={props.src}
            alt={props.alt}
            onClick={(...p) => {
              loginWithRedirect(...p);
            }}
          />
        </>
      )}
      {!isLoading && user && (
        <>
          <a href="/dashboard">
            <Image
              className="Pencil-button"
              src={props.src}
              alt={props.alt}
              onClick={saveUser(
                user.name,
                user.email,
                user.sub.split("|")[1],
                user.picture
              )}
            />
          </a>
        </>
      )}
    </div>
  );
}

export default PencilButton;
