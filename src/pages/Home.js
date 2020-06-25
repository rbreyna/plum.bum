import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Home.css";

function Home() {
  return (
    <div>
      <Jumbotron fluid className="welcome-tron">
        <img
          className="welcome-img"
          src="/assets/images/plumbum-blue.png"
          alt="plumbum"
        />
        <div class="Home-definition">
          <p style={{ fontSize: "12px" }}>
            <em>
              plumbum n (genitive plumbī); second declension<br></br> lead
              (metal) ball<br></br>
              of lead<br></br> (poetic) pipe of lead<br></br> (New Latin) pencil
            </em>
          </p>
        </div>
        <div className="welcome-header">
          <h1>Welcome.</h1>
          <p style={{ fontWeight: "bold" }}>Now start writing.</p>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Home;
