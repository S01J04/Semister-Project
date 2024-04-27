// models/Billboard.js
const mongoose = require('mongoose');

const billboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
   availability: {
    type: [String],
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  city: {
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

billboardSchema.index({ location: '2dsphere' });

const Billboard = mongoose.model('Billboard', billboardSchema);

module.exports = Billboard;
