const City = require("../models/City");

// GET /cities?limit
const getCities = async (req, res) => {
  try {
    const cities = await City.find()
      .sort({ name: 1 })
      .limit(parseInt(req.query.limit))
      .skip(parseInt(req.query.skip))
      .populate({
        path: "stateId",
        select: "name abbr",
      });
    res.send(cities);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  getCities,
};
