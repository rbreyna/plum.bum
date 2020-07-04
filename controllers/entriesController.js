const Entry = require("../models/Entry");
const User = require("../models/User");

module.exports = {

  //Entry
  getEntry: (req, res) => {
    Entry.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));

  },
  getEntrybyUser: (req, res) => {
    Entry.find({  auth0_id: req.params.auth0_id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //Create entry to an specific user
  createEntry: function (req, res) {
    Entry.create(req.body)
      .then(function (dbEntry) {

      
        return User.findOneAndUpdate({ auth0_id :req.params.auth0_id}, { $push: { entries: dbEntry._id } }, { new: true })
      })
      .then(function (dbUser) {

        res.json(dbUser);
      })
      .catch(function (err) {

        res.json(err);
      });

  },
  /*createEntryUser: function (req, res) {
    User.findOne({  auth0_id: req.params.auth0_id })
      .then(function (dbUser) {
        if (dbUser) {
          res.json(
            {

              userExists: true
            })
          Entry.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));

          return User.findOneAndUpdate({  auth0_id: req.params.auth0_id }, { $push: { entries: dbEntry._id } }, { new: true });
        } else {
          res.json(
            {
              userExists: false
            })
        }

      })
      .catch(function (err) {

        res.json(err);
      });

  },*/
  createEntries: function (req, res) {
    Entry.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));

  },

  updateEntry: function (req, res) {
    Entry.findOneAndUpdate({  auth0_id: req.params.auth0_id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  deleteEntry: function (req, res) {
    Entry.findById({  auth0_id: req.params.auth0_id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
