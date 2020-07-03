import axios from "axios";

export default {
  // Gets all entries
  findAllEntries: function () {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/entry/");
  },

  //Get entries by email
  findEntries: function ( auth0_id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/entry/" +  auth0_id);
  },
  findEntriesbydate: function ( auth0_id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/date/"+  auth0_id);
  },
  //Find by week
  findEntriesbyweek: function ( auth0_id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/week/"+  auth0_id);
  },
  //Streak Lenght
  getStreak: function ( auth0_id) {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/streak/"+  auth0_id);
  },
  
  // Saves a entry to the database
  createEntry: function (  auth0_id, entryData) {
    return axios.post("http://localhost:9000/api/entry/" +  auth0_id, entryData);
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
