import axios from "axios";

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
  updateUser: function (id, userData) {
    return axios.put("/api/user/" + id, userData);
  }, 

  // saveUserGoal: function (goalData) {
  //   return axios.post("/api/user/goal", goalData)
  // }

};

