import React from "react";
import "./PencilButton.css";
import Image from "react-bootstrap/Image";
import { useAuth0 } from "../../contexts/auth0-context";

function PencilButton(props) {
  const { isLoading, user, loginWithRedirect } = useAuth0();

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
              console.log(p);
              loginWithRedirect(...p);
            }}
          />
        </>
      )}
      {!isLoading && user && (
        <>
          <a href="/dashboard">
            <Image className="Pencil-button" src={props.src} alt={props.alt} />
          </a>
        </>
      )}
    </div>
  );
}

export default PencilButton;
