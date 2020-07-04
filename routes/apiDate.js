const router = require("express").Router();
const Entry = require("../controllers/entriesDateController");
//Email is a unique value
router.route("/date")
.get(Entry.getEntrybydate)

router.route("/date/:id")
.get(Entry.getEntrybydateUser)

router.route("/goal/:id")
.get(Entry.getgoalbydate)

router.route("/week/:id")
.get(Entry.getEntrybyweek)

router.route("/streak/:id")
.get(Entry.getstreakLenght)
module.exports = router;