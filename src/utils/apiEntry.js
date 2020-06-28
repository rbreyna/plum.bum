import axios from "axios";

export default {
  // Gets all entries
  findAllEntries: function () {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/entry/");
  },
  findEntriesbydate: function () {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/date/");
  },

  //Find by week
  findEntriesbyweek: function () {
    // Front end route will also need environment variable for production/deployment
    return axios.get("http://localhost:9000/api/week/");
  },
  // Saves a entry to the database
  createEntry: function (entryData) {
    return axios.post("http://localhost:9000/api/entry/", entryData);
  },

  createEntries: function (entryData) {
    return axios.post("http://localhost:9000/api/entry/", entryData);
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
