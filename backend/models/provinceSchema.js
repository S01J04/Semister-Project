// models/Province.js
import mongoose from 'mongoose';


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

export default Province