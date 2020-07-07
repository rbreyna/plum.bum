import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import CreateIcon from "@material-ui/icons/Create";

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
    margin: 0,
    top: "auto",
    right: "auto",
    bottom: 50,
    left: 30,
    position: "fixed",
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function SaveButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        wordCount={props.wordCount}
        className={classes.fab}
        variant="extended"
        color="secondary"
      >
        <CreateIcon className={classes.extendedIcon} />
        Current Word Count: &nbsp; {props.wordCount}
      </Fab>
    </div>
  );
}
