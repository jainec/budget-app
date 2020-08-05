const expree = require("express");
const express = require("express");
const {
  getUsers,
  getUser,
  postUser,
  patchUser,
  deleteUser,
} = require("../controllers/UserController");
const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", postUser);

router.patch("/:id", patchUser);

router.delete("/:id", deleteUser);

module.exports = router;
