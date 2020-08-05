const express = require("express");
require("./db/mongoose");
const categoryRouter = require("./routes/categories");
const cityRouter = require("./routes/cities");
const stateRouter = require("./routes/states");
const unityTypeRouter = require("./routes/unityTypes");
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");

const app = express();
app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/cities", cityRouter);
app.use("/states", stateRouter);
app.use("/unityTypes", unityTypeRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
