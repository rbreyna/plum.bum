const router = require("express").Router();
const User = require("../controllers/UserController");

router.route("/").get(User.getUsers).post(User.createUser);

router.route("/:id").put(User.updateUser).delete(User.deleteUser);

module.exports = router;
