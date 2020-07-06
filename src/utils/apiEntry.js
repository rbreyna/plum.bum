import axios from "axios";

export default {
  // Gets all entries
  findAllEntries: function () {
    return axios.get("/api/entry/");
  },

  //Get entries by user
  findEntries: function (id) {
    return axios.get("/api/entry/" + id);
  },

  //Get entries by entry_id
  findbyEntry_id: function (id) {
    return axios.get("/api/entry/id/" + id);
  },
  
  //Get entries by date
  findEntriesbydate: function (id) {
    return axios.get("/api/date/" + id);
  },

  //Find by week
  findEntriesbyweek: function (id) {
    return axios.get("/api/week/"+ id);
  },

  //Streak Lenght
  getStreak: function(id) {
    return axios.get("/api/streak/"+ id);
  },

  //Get entries betwen two date(startGoalDate and GoalDate)
  getgoaldata: function(id ) {
    return axios.get("/api/goal/"+ id);
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
