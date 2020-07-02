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
  /*   updateUser: function (userData, id) {
    return axios.put("/api/entry/" + id, entryData);
<<<<<<< HEAD
  }, */
=======
  },
  //getting the Goal and goal date 
  getGoal: function (userId){
    return axios.get("/api/goal/"+ userId);
  },
>>>>>>> 14456bce2bf03469557ddda82396aa8586f98635
};
