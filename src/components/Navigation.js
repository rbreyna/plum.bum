import React, { useEffect, useState } from "react";
import apiUser from "../utils/apiUser";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import { makeStyles } from "@material-ui/core/styles";

// Material UI variables
const useStyles = makeStyles((theme) => ({
  menuItem: {
    fontFamily: "Montserrat Alternates",
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: "#a8e6cf",
    },
  },
  avatarButton: {
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

function Navigation() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  const [dbUser, setUser] = useState({});

  //Grab ID from Auth0 user to make queries to the database
  const userID = user ? user.sub.split("|")[1] : null;

  //When an ID is found, a query is made to MongoDB to grab the record for that user
  useEffect(() => {
    if (userID) {
      loadUserInfo(userID);
    }
    return () => {};
  }, [user, userID, dbUser]);

  //API call to grab record
  const loadUserInfo = (id) => {
    apiUser
      .findUser(id)
      .then((res) => {
        console.log(res);
        setUser({
          name: res.data.name,
          picture: res.data.image,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const picture = user ? user.picture : null;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

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
              <Navbar.Text style={{ fontFamily: "Montserrat Alternates" }}>
                {dbUser.name ? `Hello, ${dbUser.name}!` : ""}
              </Navbar.Text>
              &nbsp;
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.avatarButton}
              >
                <Avatar
                  className={classes.avatarButton}
                  alt="profile picture"
                  src={picture}
                />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                  <Avatar alt="profile picture" src={picture} />
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  component={Link}
                  to="/profile"
                  onClick={handleClose}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  component={Link}
                  to="/dashboard"
                  onClick={handleClose}
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  component={Link}
                  to="/projects"
                  onClick={handleClose}
                >
                  My Projects
                </MenuItem>
              </Menu>
              &nbsp;
              {/* <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/projects">My Projects</Nav.Link> */}
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
