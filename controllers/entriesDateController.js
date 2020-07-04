const Entry = require("../models/Entry");
const moment = require("moment");
const { User } = require("../models");
module.exports = {
    //Entry by date
    getEntrybydate: (req, res) => {
        var today = moment().startOf('day');
        var tomorrow = moment(today).endOf('day');

        Entry.find({ date: { '$gte': today, '$lte': tomorrow } })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    // testing mongodb query by reached gol component
    getgoalbydate: (req, res) => {
        const startGoalDate ="2020-07-02T03:22:23.725Z";
        const goalDate = "2020-07-06T03:22:23.725Z";
    
        Entry.find({ $and: [{ date: { '$gte': startGoalDate, '$lte': goalDate } }, {  auth0_id: req.params.id }] })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    //Entry by date and user
    getEntrybydateUser: (req, res) => {
        var today = moment().startOf('day');
        var tomorrow = moment(today).endOf('day');

        Entry.find({ $and: [{ date: { '$gte': today, '$lte': tomorrow } }, {  auth0_id: req.params.id }] })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    getEntrybyweek: (req, res) => {

        Entry.find({ $and: [{ date: { '$gte': new Date((new Date().getTime() - (7 * 24 * 60 * 60 * 1000))) } }, {  auth0_id: req.params.id }] })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    getstreakLenght: (req, res) => {
        Entry.aggregate([
            {
                 $match : {  auth0_id : req.params.id } 
            },
            {
                "$group": {
                    "_id": {
                        "$add": [
                            {
                                "$subtract": [
                                    { "$subtract": ["$date", new Date(0)] },
                                    {
                                        "$mod": [
                                            { "$subtract": ["$date", new Date(0)] },
                                            1000 * 60 * 60 * 24
                                        ]
                                    }
                                ]
                            },
                            new Date(0)
                        ]
                    },
                    "entries": { "$sum": 1 }
                }
            }
        ])
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};