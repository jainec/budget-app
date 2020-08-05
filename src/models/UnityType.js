const mongoose = require('mongoose');

const unityTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    abbr: {
        type: String
    }
}, { timestamps: true });

const UnityType = mongoose.model('UnityType', unityTypeSchema);

module.exports = UnityType;