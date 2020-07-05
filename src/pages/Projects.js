import React from "react";

// Files/Components
import { useAuth0 } from "../contexts/auth0-context";
import PopulateEntries from "../components/PopulateEntries/PopulateEntries.js";
import theme from "../Theme";

// Material UI
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// Material UI variables
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop: "20px",
  },
  userHeader: {
    justify: "space-between",
    wrap: "nowrap",
  },
  headerText: {
    marginLeft: "20px",
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img alt={name} src={picture} className={classes.avatar} />
              <h1 className={classes.headerText}>
                {user ? `${user.name}'s` : null} Projects
              </h1>
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
