import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";

import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// SHAYDA NOTE: This is the default css file; will need to be updated:
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
