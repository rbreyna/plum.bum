import axios from "axios";
import useAuth0 from "../context/autho0-context";

export default {
  // Updates an entry
  findUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Saves a user to the database
  createUser: function (userData) {
    return axios.post("/api/user/", userData);
  },
  // Deletes the entry with the given id
  deleteEntry: function (id) {
    return axios.delete("/api/user/" + id);
  }
};
