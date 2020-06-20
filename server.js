const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

// SHAYDA NOTE: I've commented out routes for now since none are yet included. Will update as needed.
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 9000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/entry", require("./routes/apiEntry"));
app.use("/api/user", require("./routes/apiUser"));

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
