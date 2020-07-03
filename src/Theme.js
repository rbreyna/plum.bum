import { createMuiTheme } from "@material-ui/core/styles";

const plumbumTeal = "##a8e6cf";
const plumbumPlum = "##88498f";

export default createMuiTheme({
  palette: {
    common: {
      paleTeal: `${plumbumTeal}`,
      plum: `${plumbumPlum}`,
    },
    primary: {
      main: `${plumbumTeal}`,
    },
    secondary: {
      main: `${plumbumPlum}`,
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
