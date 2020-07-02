import axios from "axios";

export default {
  // Gets all entries
  findAllEntries: function () {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/entry/");
  },

  //Get entries by email
  findEntries: function (email) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/entry/" + email);
  },
  findEntriesbydate: function (email) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/date/"+ email);
  },
  //Find by week
  findEntriesbyweek: function (email) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/week/"+ email);
  },
  //Streak Lenght
  getStreak: function (email) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/streak/"+ email);
  },
  
  // Saves a entry to the database
  createEntry: function ( email, entryData) {
    return axios.post("http://localhost:9000/api/entry/" + email, entryData);
  },


  // Updates an entry
  updateEntry: function (entryData, id) {
    return axios.put("http://localhost:9000/api/entry/" + id, entryData);
  },
  // Deletes the entry with the given id
  deleteEntry: function (id) {
    return axios.delete("http://localhost:9000/api/entry/" + id);
  },
};
