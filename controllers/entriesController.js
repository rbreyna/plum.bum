const Entry = require("../models/Entry");
const User = require("../models/User");

module.exports = {
  getEntry: (req, res) => {
    Entry.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  createEntry: function (req, res) {
    Entry.create(req.body)
    .then(function(dbEntry) {
      
      return User.findOneAndUpdate({ email: req.params.email }, {  $push: { entries: dbEntry._id } }, { new: true });
    })
    .then(function(dbUser) {
    
      res.json(dbUser);
    })
    .catch(function(err) {
    
      res.json(err);
    });
  
  },

  updateEntry: function (req, res) {
    Entry.findOneAndUpdate({ email: req.params.email}, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  deleteEntry: function (req, res) {
    Entry.findById({email: req.params.email })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
