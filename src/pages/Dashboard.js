import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useAuth0 } from "../contexts/auth0-context";
import { WritingGoal } from "../components/WritingGoal/WritingGoal.js";
import WordCount from "../components/WordCount/WordCount";
import apiUser from "../utils/apiUser";
import GoalReached from "../components/WritingGoal/GoalReached.js";
import DashboardUI from "../components/DashboardUI";
import Grid from "@material-ui/core/Grid";

function Dashboard(props) {
  const { user } = useAuth0();
  const [dbUser, setUser] = useState({});

  const [modalShow, setModalShow] = useState(false);

  //Grab ID from Auth0 user to make queries to the database
  const userID = user ? user.sub.split("|")[1] : null;

  //When an ID is found, a query is made to MongoDB to grab the record for that user
  useEffect(() => {
    if (userID) {
      loadUserInfo(userID);
    }
    return () => {};
  }, [user, userID]);

  //API call to grab record
  const loadUserInfo = (id) => {
    apiUser
      .findUser(id)
      .then((res) => {
        setUser({
          name: res.data.name,
          picture: res.data.image,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goalDiv = {
    marginBottom: "15px",
    textAlign: "center",
  };

  const headerStyles = {
    fontFamily: "Ribeye Marrow",
    marginTop: "20px",
    marginBottom: "30px",
  };

  return (
    <>
      <h1 style={headerStyles}>
        {dbUser.name ? `${dbUser.name}'s Dashboard` : ""}
      </h1>
      <Container>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Image
                src={dbUser.picture}
                width={320}
                height={320}
                roundedCircle
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DashboardUI />
            </Grid>
          </Grid>
        </div>
        <div style={goalDiv}>
          <WritingGoal show={modalShow} onHide={() => setModalShow(false)} />
          <GoalReached show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        <WordCount />
      </Container>
    </>
  );
}
export default Dashboard;
