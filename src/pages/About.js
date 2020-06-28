import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Profile from "./Profile"
import { useAuth0 } from "../contexts/auth0-context";


function About() {

  const { user } = useAuth0();

  function handleClick(e) {
      e.preventdefault();
      
      return(
      <Profile name = {user.name}
      email = { user ? `${user.email}` : null}
      pictureSrc = {user ? `${user.name}` : null}/>)
    

  }

  return (
    <div>
      <Jumbotron>
        <h1>About Page</h1>
      </Jumbotron>
    {user && (
      <>
      <div>
        <h1>Verify the following information.</h1>
        <ul style = {{listStyle: "none"}}>
          <li>Name: {user ? `${user.name}` : null}</li>
          <li>Email: {user ? `${user.email}` : null}</li>
          <li>Picture: <img src ={user ? `${user.picture}` : null} alt="icon"></img></li>
        </ul>
        <button onClick ={handleClick}>Update User Profile</button>
      </div>
      </>
    )}

    
    {!user && (
      <h4>You must sign in first!</h4>
    )}
      
    </div>
  );
}

export default About;
