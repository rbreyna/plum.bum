import axios from "axios";
import useAuth0 from "../context/autho0-context";

export default {
  // Saves a user to the database
  createUser: function (userData) {
    return axios.post("/api/user/", userData);
  },
};
