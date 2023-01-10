const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    orderedAt: {
        type: Date,
        default: Date.now()
    },
    equipment: {
        type: [String],
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    }
});

module.exports = orderSchema;