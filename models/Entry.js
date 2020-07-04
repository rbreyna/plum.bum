const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  auth0_id: {
    type: String,
     required: true,
  },
  title: {
    type: String,
    required: true,
  },
  entryBody: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
