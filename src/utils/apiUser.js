import axios from "axios";
import useAuth0 from "../context/autho0-context";
// const useAuth0 = require("../context/autho0-context");

// const user = useAuth0.user();

export default {
  // Gets all entries
  //   findAllEntries: function () {
  //     return axios.get("/api/entry/");
  //   },

  // Saves a entry to the database
  createUser: function (userData) {
    return axios.post("/api/user/", userData);
  },

  //   // Updates an entry
  //   updateEntry: function (entryData, id) {
  //     return axios.put("/api/entry/" + id, entryData);
  //   },
  //   // Deletes the entry with the given id
  //   deleteEntry: function (id) {
  //     return axios.delete("/api/entry/" + id);
  //   },
};
