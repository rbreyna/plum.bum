const User = require("../models/User");
const Entry = require("../models/Entry");
module.exports = {

  //Grab user into the database
  createUser: function (req, res) {
    User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //Get all Users
  getUsers: function (req, res) {
    User.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //Get user by id
  getUser: function (req, res) {
    User.findOne({ auth0_id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //Update an specific user
  updateUser: function (req, res) {
    User.findOneAndUpdate({ auth0_id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //Delete an specific user
  deleteUser: function (req, res) {
    User.findById({ auth0_id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
