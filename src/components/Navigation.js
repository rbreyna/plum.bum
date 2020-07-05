import React from "react";
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
      color: "white",
      backgroundColor: "#a8e6cf",
    },
  },
}));

function Navigation() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
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
                Hello, {user.name}!
              </Navbar.Text>
              &nbsp;
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <Avatar alt="profile picture" src={picture} />
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
