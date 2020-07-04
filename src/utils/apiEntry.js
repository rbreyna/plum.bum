import axios from "axios";

export default {
  // Gets all entries
  findAllEntries: function () {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/entry/");
  },

  //Get entries by _id
  findEntries: function ( auth0_id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/entry/" +  auth0_id);
  },
  findEntriesbydate: function ( auth0_id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/date/"+  auth0_id);
  },
  //Find by week
  findEntriesbyweek: function ( auth0_id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/week/"+  auth0_id);
  },
  //Streak Lenght
  getStreak: function ( auth0_id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/streak/"+  auth0_id);
  },
  
  // Saves a entry to the database
  createEntry: function (  auth0_id, entryData) {
    return axios.post("/api/entry/" +  auth0_id, entryData);
  },


  // Updates an entry
  updateEntry: function ( auth0_id ,entryData) {
    return axios.put("/api/entry/" + auth0_id, entryData);
  },
  // Deletes the entry with the given id
  deleteEntry: function (auth0_id) {
    return axios.delete("/api/entry/" + auth0_id);
  },
};
