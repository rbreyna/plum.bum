import React, {Component} from "react";
import "./Dashboard.css";
import { Button, Container, Col, Row, FormControl, InputGroup, Image } from "react-bootstrap";
import { useAuth0 } from '../contexts/auth0-context';
import { WritingGoal } from '../components/WritingGoal';
import Wordcount from "../components/WordCount";


export default class files extends Component {
    
    state = {
        textinput :"",
        textarea : "",
     

    }
    
    handleinputText = (event) => {
        event.preventDefault();
        this.setState({ text: event.target.value })
    }
    handleTextarea = (event) => {
        event.preventDefault();
        this.setState({ textarea: event.target.value })
    }

    
    render() {
       
        const [modalShow, setModalShow] = React.useState(false);
        return (
            <div>
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
                            <p>Word Count :{this.countWords(this.state.textarea)}</p>
                            <p>Daily Word Count:</p><br></br>
                            <p>Weekly Word Count:</p><br></br>

                            { /* Rahida : added this to pop a modal when Writing goal is clicked*/}
                            <>
                                <Button onClick={() => setModalShow(true)}>
                                    <p>Writing Goal:</p>
                                </Button>

                                <WritingGoal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </>
                        </Col>
                    </Row>
                    
                        <Wordcount
                         handleTextarea={this.handleTextarea}
                        handleinputText={this.handleinputText}
                        textinput={this.state.textinput}
                        textarea={this.state.textarea}
                         />
                </Container>
      
            </div >
        )
    }
}
