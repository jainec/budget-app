const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: "jaine.ccs@gmail.com",
    pass: "izpoqzfaadywhxgp",
  },
});

module.exports = transporter;
