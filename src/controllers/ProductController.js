const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).send();
    }

    res.send(product);
  } catch (error) {
    res.status(500).send();
  }
};

const postProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
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
