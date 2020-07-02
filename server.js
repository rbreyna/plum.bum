const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

var User = require("./models/User");
var Entry = require("./models/Entry");
const app = express();
const PORT = process.env.PORT || 9000;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/entry", require("./routes/apiEntry"));
app.use("/api/user", require("./routes/apiUser"));
app.use("/api", require("./routes/apiDate"));

//Serve static folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("src/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "build", "index.html"));
  });
}

// Connect to the Mongo DB

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/plumbumApp";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

console.log("DB Connected");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
