import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";

function Navigation() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  const picture = user ? user.picture : null;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img id="nav-logo" src="./assets/images/plumbum-main.png" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-end" style={{ width: "100%" }}>
          {/* if there is no user. show the login button */}
          {!isLoading && !user && (
            <>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link
                onClick={(...p) => {
                  console.log(p);
                  loginWithRedirect(...p);
                }}
              >
                Login | Sign Up
              </Nav.Link>
            </>
          )}
          {!isLoading && user && (
            <>
              <Navbar.Text>Hello {user.name}!</Navbar.Text>
              &nbsp; &nbsp; &nbsp;
              <Avatar alt="profile picture" src={picture} />
              &nbsp; &nbsp; &nbsp;
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/projects">My Projects</Nav.Link>
              <Nav.Link
                onClick={() =>
                  logout(
                    { returnTo: window.location.origin },
                    window.localStorage.clear()
                  )
                }
                className="navbar-item"
              >
                {" "}
                Logout{" "}
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
