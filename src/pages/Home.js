import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import CircleButton from "../components/CircleButton/CircleButton.js";
import "./Home.css";
import anime from "animejs/lib/anime.es.js";

function Home() {
  return (
    <div>
      <Jumbotron fluid className="Home-tron">
        <img
          className="Home-welcome-img"
          src="/assets/images/plumbum-blue.png"
          alt="plumbum logo"
        />
        <div class="Home-definition">
          <p style={{ fontSize: "14px" }}>
            <em>
              plumbum: noun; new latin. <strong>pencil.</strong>
            </em>
            <br></br>
            <img
              className="Home-pencil-img"
              src="/assets/images/pencil.png"
              alt="pencil image"
            />
          </p>
        </div>
        <div className="Home-header">
          <h2>Welcome.</h2>
          <p style={{ fontWeight: "bold" }}>Now start writing.</p>
        </div>
        <div className="Home-circle-buttons">
          <CircleButton src="/assets/images/dashboard.png" alt="dashboard" />
          <CircleButton src="/assets/images/myprojects.png" alt="my projects" />
          <CircleButton src="/assets/images/myaccount.png" alt="my account" />
        </div>
      </Jumbotron>
    </div>
  );
}

export default Home;
