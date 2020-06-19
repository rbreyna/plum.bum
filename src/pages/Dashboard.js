import React from "react";
import "./Dashboard.css";

import { Button, Container, Col, Row, FormControl, InputGroup, Image } from "react-bootstrap";
import { useAuth0 } from '../contexts/auth0-context';
<<<<<<< HEAD
import { WritingGoal } from '../components/WritingGoal';
=======
import {WritingGoal} from '../components/WritingGoal';
import WordCount from "../components/WordCount";
>>>>>>> 7762950fe586fa948de8dec8d28853589631f050

{/*rashida : added*/}

function Dashboard() {
  const { user } = useAuth0();

<<<<<<< HEAD
  /*rashida : added*/
  const [modalShow, setModalShow] = React.useState(false);


=======
{/*rashida : added*/}
const [modalShow, setModalShow] = React.useState(false);
>>>>>>> 7762950fe586fa948de8dec8d28853589631f050
  return (
    <div>
      <h1> {user ? `${user.name}'s` : null} Dashboard Page</h1>

      <Container>
        <Row className="justify-center-content fluid" id="row-1">
          <Col className="content dash1" sm={4}>
            <Image
              src="./assets/images/profile-pic-placeholder.jpg"
              width={150}
              height={150}
              style={{ marginTop: "20px" }}
              roundedCircle
            />
           
          </Col>
          <Col className="content dash2" sm={8}>
            
            <p>Daily Word Count:</p><br></br>
            <p>Weekly Word Count:</p><br></br>

            { /* Rahida : added this to pop a modal when Writing goal is clicked*/}
            <>
              <Button onClick={() => setModalShow(true)}>
                <p>Writing Goal:</p>
              </Button>

<<<<<<< HEAD
              <WritingGoal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>


          </Col>
        </Row>
        <Row className="fluid" id="row-2">
          <Col className="content dash3" sm={12}>
            <InputGroup>
              <br></br>
              <InputGroup id="passage-title" sm={12}>
                <InputGroup.Prepend>
                  <InputGroup.Text>Name of Passage</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
                <br></br>
              </InputGroup>
              <FormControl
                id="passage"
                as="textarea"
                aria-label="With textarea"
              />
            </InputGroup>
=======
                <WritingGoal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
               </>
>>>>>>> 7762950fe586fa948de8dec8d28853589631f050
          </Col>
        </Row>
        <WordCount
          />
      </Container>
    </div>
  );
}

export default Dashboard;
