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
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginTop: "20px",
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

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Avatar
                  alt="user image"
                  src={picture}
                  className={classes.large}
                />
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}>
                <h3>{user ? `${user.name}'s` : null} Projects</h3>
                <h6>{user ? `${user.name}` : null}</h6>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
