import React from "react";

// Files/Components
import { useAuth0 } from "../contexts/auth0-context";
import PopulateEntries from "../components/PopulateEntries/PopulateEntries.js";

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

function Dashboard() {
  const { user } = useAuth0();
  const picture = user ? user.picture : null;
  const classes = useStyles();
  const name = user ? user.name : null;

  return (
    <>
      <div className={classes.userHeader}>
        <Container>
          <Grid item xs={12}>
            <div className={classes.headerDiv}>
              <h1 className={classes.headerText}>
                {" "}
                &nbsp; &nbsp;
                {user ? `${user.name}'s` : null} Projects
              </h1>
              <Image
                alt={name}
                src={picture}
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

export default Dashboard;
