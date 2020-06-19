import axios from "axios";

export default {
  // Gets all entries
  findAllEntries: function () {
    return axios.get("/api/entry/");
  },

  // Saves a entry to the database
  createEntry: function (entryData) {
    return axios.post("/api/entry/", entryData);
  },

  // Updates an entry
  updateEntry: function (entryData, id) {
    return axios.put("/api/entry/" + id, entryData);
  },
  // Deletes the entry with the given id
  deleteEntry: function (id) {
    return axios.delete("/api/entry/" + id);
  },
};
