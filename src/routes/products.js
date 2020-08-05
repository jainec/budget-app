const express = require("express");
const {
  getProducts,
  getProduct,
  postProduct,
  patchProduct,
  deleteProduct,
} = require("../controllers/ProductController");
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", postProduct);

router.patch("/:id", patchProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
