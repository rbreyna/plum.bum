const router = require("express").Router();
const Entry = require("../controllers/entriesController");

router.route("/")
.get(Entry.getEntry)
.post(Entry.createEntries);


//Email is a unique value
router
  .route("/:auth0_id")
  .get(Entry.getEntrybyUser)
  .post(Entry.createEntry)
  .put(Entry.updateEntry)
  .delete(Entry.deleteEntry);

module.exports = router;