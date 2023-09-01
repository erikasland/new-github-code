const mongoose = require('mongoose');

const motorcycleSchema = new mongoose.Schema({
    name: String, 
    type: String
});

module.exports = mongoose.model('Motorcycle', motorcycleSchema);