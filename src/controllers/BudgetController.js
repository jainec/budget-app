const Budget = require("../models/Budget");
const Product = require("../models/Product");
const transporter = require("../email");

const getBudgets = async (req, res) => {
  try {
    const bugdets = await Budget.find()
      .populate({
        path: "userId",
        select: "name",
      })
      .populate({ path: "products.product", select: "name" });
    res.send(bugdets);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getBudget = async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id)
      .populate({
        path: "userId",
        select: "name",
      })
      .populate({ path: "products.product", select: "name" });

    if (!budget) {
      return res.status(404).send();
    }

    res.send(budget);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postBudget = async (req, res) => {
  let totalPrice = 0;
  try {
    if (req.body.products) {
      for (item of req.body.products) {
        const product = await Product.findById(item.product);
        if (!product) {
          return res
            .status(404)
            .send({ error: "Product (" + item.product + ") not found" });
        }
        let price = parseInt(product.price) * item.quantity;
        item.price = price;
        totalPrice += price;
      }
    }
    const budget = await Budget.create({
      userId: req.user._id,
      products: req.body.products,
      totalPrice,
    });
    res.send(budget);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findOneAndRemove({ _id: req.params.id });

    if (!budget) {
      return res.status(404).send();
    }
    res.send(budget);
  } catch (error) {
    res.status(500).send();
  }
};

const sendBudgetToEmail = async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);

    if (!budget) {
      return res.status(404).send();
    }
    const email = {
      from: "jaine.ccs@gmail.com",
      to: req.body.email,
      subject: "Orçamento - Budget App",
      text: "Hello 20",
    };
    transporter.sendMail(email, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });
    res.send(email);
  } catch (error) {
    res.send(500).send(error);
  }
};

//exportAsPdf

module.exports = {
  getBudgets,
  getBudget,
  postBudget,
  deleteBudget,
  sendBudgetToEmail,
};
