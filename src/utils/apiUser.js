import axios from "axios";
import useAuth0 from "../contexts/auth0-context";

export default {
  // Finds a specific user with a given id
  findUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Saves a user to the database
  createUser: function (userData) {
    return axios.post("/api/user/", userData);
  },
  // Updates a user with a given id
  // updateUser: function (userData, id) {
  //   return axios.put("/api/entry/" + id, entryData);
  // },
  //getting the Goal and goal date 
  getGoal: function (userId){
    return axios.get("/api/goal/"+ userId);
  },
};
