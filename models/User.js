const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "No Email",
  },
  goal: {
    type: Number,
    default: 0,
  },
  goalDate: {
    type: Date,
    default: Date.now(),
  },
  startGoalDate: {
    type: Date,
    default: Date.now(),
  },
  dailyWordCount: {
    type: String,
    default: 0,
  },

  image: {
    type: String,
    required: true,
    default: function () {
      if (this.image === "" || this.image === null) {
        // Should allow us to assign a user a default image randomly
        let userImageArray = ["avatar1.png", "avatar2.png", "avatar3.png"];

        let userIndex =
          userImageArray[Math.floor(Math.random() * userImageArray.length)];

        let userImage = "../public/assets/images/avatar" + userIndex;

        return userImage;
        // }
      }
    },
  },

  auth0_id: {
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
