// models/City.js
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: 'Pakistan'
  }
});

const City = mongoose.model('City', citySchema);

module.exports = City;
