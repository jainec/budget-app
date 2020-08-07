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

router.get("/", auth, getProducts);

router.get("/:id", auth, getProduct);

router.post("/", auth, postProduct);

router.patch("/:id", auth, patchProduct);

router.delete("/:id", auth, deleteProduct);

module.exports = router;
