import React, { useEffect, useState } from "react";

// Files/Components
import { useAuth0 } from "../contexts/auth0-context";
import PopulateEntries from "../components/PopulateEntries/PopulateEntries.js";
import apiUser from "../utils/apiUser";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Image from "react-bootstrap/Image";

// Material UI variables
const useStyles = makeStyles((theme) => ({
  headerDiv: {
    textAlign: "center",
  },
  headerText: {
    fontFamily: "Ribeye Marrow",
    marginTop: "20px",
    marginBottom: "10px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Projects() {
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

  const classes = useStyles();

  return (
    <>
      <div className={classes.userHeader}>
        <Container>
          <Grid item xs={12}>
            <div className={classes.headerDiv}>
              <h1 className={classes.headerText}>
                {dbUser.name ? `${dbUser.name}'s Projects` : ""}
              </h1>
              <Image
                alt={dbUser.name}
                src={dbUser.picture}
                width={100}
                height={100}
                roundedCircle
              />
            </div>
          </Grid>
        </Container>
      </div>
      <Container>
        <Grid item xs={12} style={{ marginTop: "40px" }}>
          <PopulateEntries />
        </Grid>
      </Container>
    </>
  );
}

export default Projects;
