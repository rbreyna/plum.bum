const router = require("express").Router();
const Entry = require("../controllers/entriesController");

router.route("/").get(Entry.getEntry);

router
  .route("/:email")
  .post(Entry.createEntry)
  .put(Entry.updateEntry)
  .delete(Entry.deleteEntry);

module.exports = router;
