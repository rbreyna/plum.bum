const router = require("express").Router();
const Entry = require("../controllers/entriesDateController");

router.route("/date")
.get(Entry.getEntrybydate)

router.route("/date/:email")
.get(Entry.getEntrybydateUser)

router.route("/week/:email")
.get(Entry.getEntrybyweek)

router.route("/streak/:email")
.get(Entry.getstreakLenght)
module.exports = router;