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


    //Entry by date and user
    getEntrybydateUser: (req, res) => {
        var today = moment().startOf('day');
        var tomorrow = moment(today).endOf('day');

        Entry.find({ $and: [{ date: { '$gte': today, '$lte': tomorrow } }, {  auth0_id: req.params.auth0_id }] })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    getEntrybyweek: (req, res) => {

        Entry.find({ $and: [{ date: { '$gte': new Date((new Date().getTime() - (7 * 24 * 60 * 60 * 1000))) } }, {  auth0_id: req.params.auth0_id }] })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    getstreakLenght: (req, res) => {
        Entry.aggregate([
            {
                 $match : {  auth0_id : req.params.auth0_id } 
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