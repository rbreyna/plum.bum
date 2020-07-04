import axios from "axios";

export default {
  // Gets all entries
  findAllEntries: function () {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/entry/");
  },

  //Get entries by _id
  findEntries: function (id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/entry/" + id);
  },
  findEntriesbydate: function (id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/date/"+ id);
  },
  //Find by week
  findEntriesbyweek: function (id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/week/"+ id);
  },
  //Streak Lenght
  getStreak: function(id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("/api/streak/"+ id);
  },
  
  // Saves a entry to the database
  createEntry: function ( id , entryData) {
    return axios.post("/api/entry/" + id, entryData);
  },


  // Updates an entry
  updateEntry: function (id ,entryData) {
    return axios.put("/api/entry/" + id, entryData);
  },
  // Deletes the entry with the given id
  deleteEntry: function (id) {
    return axios.delete("/api/entry/" + id);
  },
};
