const express = require("express");
const cors = require("cors");
require("./db/mongoose");

const categoryRouter = require("./routes/categories");
const cityRouter = require("./routes/cities");
const stateRouter = require("./routes/states");
const unityTypeRouter = require("./routes/unityTypes");
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");
const budgetRouter = require("./routes/budgets");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/cities", cityRouter);
app.use("/states", stateRouter);
app.use("/unityTypes", unityTypeRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/budgets", budgetRouter);

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
