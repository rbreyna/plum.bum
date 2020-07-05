const router = require("express").Router();
const Entry = require("../controllers/entriesDateController");

router.route("/date")
.get(Entry.getEntrybydate)

router.route("/date/:id")
.get(Entry.getEntrybydateUser)

router.route("/week/:id")
.get(Entry.getEntrybyweek)

router.route("/streak/:id")
.get(Entry.getstreakLenght)

router.route("/goal/:id")
.get(Entry.getgoalbydate)

module.exports = router;