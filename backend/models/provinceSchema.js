// models/Province.js
const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: 'Pakistan'
  }
});

const Province = mongoose.model('Province', provinceSchema);

module.exports = Province;
