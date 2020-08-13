const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/budget-app", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Running database"))
  .catch((error) => console.log(error));
