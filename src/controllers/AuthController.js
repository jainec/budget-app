const User = require("../models/User");

const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateJwtToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  login,
};
