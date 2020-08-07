const Budget = require("../models/Budget");
const transporter = require("../email");

const getBudgets = async (req, res) => {
  try {
    const bugdets = await Budget.find();
    res.send(bugdets);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getBudget = async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);

    if (!budget) {
      return res.status(404).send();
    }

    res.send(budget);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postBudget = async (req, res) => {
  try {
    const budget = new Budget(req.body);
    await budget.save();
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
