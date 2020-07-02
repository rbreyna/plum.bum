const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    default: 0,
  },
  goalDate: {
    type: Date,
   
  },
  startGoalDate: {
    type: Date,
  }

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

  /*auth0_id:{
    type: String,
    unique: true,
    required: true,
  },*/

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
