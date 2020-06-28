const Entry = require("../models/Entry");
const moment= require("moment")
module.exports = {
  //Entry by date
  getEntrybydate: (req, res) => {
    var today = moment().startOf('day');
    var tomorrow = moment(today).endOf('day');

    Entry.find( { date: { '$gte': today, '$lte': tomorrow } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getEntrybyweek: (req, res) => {
     Entry.find( {date :{ $gte: new Date((new Date().getTime() - (7 * 24 * 60 * 60 * 1000)))}})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
};