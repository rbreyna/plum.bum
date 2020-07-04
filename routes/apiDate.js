const router = require("express").Router();
const Entry = require("../controllers/entriesDateController");
//Email is a unique value
router.route("/date")
.get(Entry.getEntrybydate)

router.route("/date/:auth0_id")
.get(Entry.getEntrybydateUser)

router.route("/week/:auth0_id")
.get(Entry.getEntrybyweek)

router.route("/streak/:auth0_id")
.get(Entry.getstreakLenght)
module.exports = router;