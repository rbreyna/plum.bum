import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useAuth0 } from "../contexts/auth0-context";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            pictureSrc: ""
        };
    }

    componentDidMount() {
        this.loadUserInfo();
    }

    loadUserInfo() {
        
        const { user } = useAuth0;

        const name = user ? user.name : null;
        const email = user ? user.email : null;
        const pictureSrc = user ? user.picture : null;

        console.log(name);
        console.log(email);
        console.log(pictureSrc);   
    }

    render() {
        return (
            <div>

            </div>
        )
    }

}

export default Profile;