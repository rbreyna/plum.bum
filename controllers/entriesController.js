const Entry = require("../models/Entry");
const User = require("../models/User");

module.exports = {
  //Get All Entry
  getEntry: (req, res) => {
    Entry.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //Get entry by entry_id
  getEntryby_id: (req, res) => {
    Entry.findOne({ _id: req.params.entry_id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //Get entry by specific user
  getEntrybyUser: (req, res) => {
    Entry.find({ auth0_id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //Create entry by specific user
  createEntry: function (req, res) {
    Entry.create(req.body)
      .then(function (dbEntry) {
        return User.findOneAndUpdate(
          { auth0_id: req.params.id },
          { $push: { entries: dbEntry._id } },
          { new: true }
        );
      })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  //Populate entry
  createEntries: function (req, res) {
    Entry.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //Update Entry by specific user
  updateEntry: function (req, res) {
    Entry.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //Delete Entry by specific user
  deleteEntry: function (req, res) {
    Entry.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
