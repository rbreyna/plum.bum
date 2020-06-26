const router = require("express").Router();
const User = require("../controllers/userController");

router.route("/").get(User.getUsers).post(User.createUser);

router.route("/:id")
    .get(User.getUser)
    .put(User.updateUser)
    .delete(User.deleteUser)

   
module.exports=router
