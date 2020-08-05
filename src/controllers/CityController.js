const City = require('../models/City');

const getCities = async (req, res) => {
    try {
        const cities = await City.find();
        res.send(cities);
    } catch (error) {
        res.status(500).send();
    }
}

module.exports = {
    getCities
}