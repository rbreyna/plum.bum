const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },

  // This allows us to populate "User" with any associated entry
  entries: [
    {
      type: Schema.Types.ObjectId,
      ref: "Entry",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
