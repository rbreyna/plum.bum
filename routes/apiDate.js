const router = require("express").Router();
const Entry = require("../controllers/entriesDateController");

router.route("/date")
.get(Entry.getEntrybydate)

router.route("/week")
.get(Entry.getEntrybyweek)
module.exports = router;