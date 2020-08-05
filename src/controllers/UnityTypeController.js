const UnityType = require('../models/UnityType');

const getUnityTypes = async (req, res) => {
    try {
        const unityTypes = await UnityType.find();
        res.send(unityTypes);
    } catch (error) {
        res.status(500).send();
    }
}

module.exports = {
    getUnityTypes
}