const State = require('../models/State');

const getStates = async (req, res) => {
    try {
        const states = await State.find();
        res.send(states);
    } catch (error) {
        res.status(500).send();
    }
}

module.exports = {
    getStates
}