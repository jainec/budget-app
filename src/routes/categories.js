const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const {
  getCategories,
  postCategories,
  getCategory,
  deleteCategory,
  patchCategory,
} = require("../controllers/CategoryController");

router.get("/", auth, getCategories);

router.post("/", auth, postCategories);

router.get("/:id", auth, getCategory);

router.patch("/:id", auth, patchCategory);

router.delete("/:id", auth, deleteCategory);

module.exports = router;
