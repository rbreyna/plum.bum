import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";

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
    right: 30,
    bottom: 50,
    left: "auto",
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
      <Fab className={classes.fab} variant="extended" color="secondary">
        <SaveIcon className={classes.extendedIcon} />
        Save
      </Fab>
    </div>
  );
}
