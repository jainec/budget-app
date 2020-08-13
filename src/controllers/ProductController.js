const Product = require("../models/Product");
const sharp = require("sharp");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ name: 1 })
      .populate({ path: "unityTypeId", select: "name abbr" })
      .populate({ path: "categories", select: "name" });
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate({
        path: "unityTypeId",
        select: "name abbr",
      })
      .populate({ path: "categories", select: "name" });

    if (!product) {
      res.status(404).send();
    }

    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const buffer = await sharp(req.file.path).png().toBuffer();
    product.images.push(buffer);
    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const patchProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!product) {
      res.status(404).send();
    }

    res.send(product);
  } catch (error) {
    res.status(500).send();
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndRemove({ _id: req.params.id });

    if (!product) {
      res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  patchProduct,
  deleteProduct,
};
