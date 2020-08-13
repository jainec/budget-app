const express = require("express");
const auth = require("../middlewares/auth");
const {
  getProducts,
  getProduct,
  postProduct,
  patchProduct,
  deleteProduct,
} = require("../controllers/ProductController");
const router = express.Router();
const multer = require("multer");

const upload = multer({
  dest: "productsImages",
});

router.get("/", auth, getProducts);

router.get("/:id", auth, getProduct);

router.post("/", auth, upload.array("images"), postProduct);

router.patch("/:id", auth, patchProduct);

router.delete("/:id", auth, deleteProduct);

module.exports = router;
