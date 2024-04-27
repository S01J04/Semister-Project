// models/City.js
import mongoose from 'mongoose';


const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  province: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Province',
    required: true
  },

  country: {
    type: String,
    default: 'Pakistan'
  }
});

const City = mongoose.model('City', citySchema);

export default City
