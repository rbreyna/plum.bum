const User = require("../models/User");
const Entry = require("../models/Entry");
module.exports = {
  createUser: function (req, res) {
    User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  getUsers: function (req, res) {
    User.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  getUser: function (req, res) {
    User.find({auth0_id: req.params.auth0_id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  
  
  updateUser: function (req, res) {
    User.findOneAndUpdate({ auth0_id: req.params.auth0_id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  deleteUser: function (req, res) {
    User.findById({ auth0_id: req.params.auth0_id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
