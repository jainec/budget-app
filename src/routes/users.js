const expree = require("express");
const express = require("express");
const auth = require("../middlewares/auth");
const {
  getUsers,
  getUser,
  postUser,
  patchUser,
  deleteUser,
} = require("../controllers/UserController");
const router = express.Router();

router.get("/", auth, getUsers);

router.get("/:id", auth, getUser);

router.post("/", postUser);

router.patch("/:id", auth, patchUser);

router.delete("/:id", auth, deleteUser);

module.exports = router;
