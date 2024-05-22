// models/Billboard.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const billboardSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  description: {
    type: String,
    required: true
  }, 
  imgpath: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true,
    default: "available"
  },
  dimensions: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'], // Only accept 'Point' as the type
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

export default Billboard;
