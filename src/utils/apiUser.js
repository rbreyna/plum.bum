import axios from "axios";
import useAuth0 from "../context/autho0-context";

export default {
  // Finds a specific user
  findUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Saves a user to the database
  createUser: function (userData) {
    return axios.post("/api/user/", userData);
  },
  // Updates a user
  updateUser: function (userData, id) {
    return axios.put("/api/entry/" + id, entryData);
  },
};
