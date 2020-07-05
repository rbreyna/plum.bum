import { createMuiTheme } from "@material-ui/core/styles";

const plumTeal = "#a8e6cf";
const plumPlum = "#88498f";
const plumDarkTeal = "#247ba0";

export default createMuiTheme({
  palette: {
    common: {
      plumTeal: `${plumTeal}`,
      plumPlum: `${plumPlum}`,
    },
    primary: {
      main: `${plumTeal}`,
    },
    secondary: {
      main: `${plumDarkTeal}`,
    },
  },
  typography: {
    // tab: {
    //   fontFamily: "Raleway",
    //   textTransform: "none",
    //   fontWeight: 700,
    //   fontSize: "1rem",
    // },
    // estimate: {
    //   fontFamily: "Pacifico",
    //   fontSize: "1rem",
    //   textTransform: "none",
    //   color: "white",
    // },
  },
});
