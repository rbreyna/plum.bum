import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    zIndex: 1600,
    margin: 0,
    top: "auto",
    right: 30,
    bottom: 50,
    left: "auto",
    position: "fixed",
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function CreateNewEntry() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a href="/dashboard">
        <Fab className={classes.fab} variant="extended" color="secondary">
          <AddIcon className={classes.extendedIcon} />
          Create New Project
        </Fab>
      </a>
    </div>
  );
}
