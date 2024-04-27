// models/Billboard.js
import mongoose from 'mongoose';


const billboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  imgpath: {
    type: String,
    required: true
  },
   availability: {
    type: [String],
    required: true,
    default: "available"
  },
  dimensions: {
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
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
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

billboardSchema.index({ location: '2dsphere' });

const Billboard = mongoose.model('Billboard', billboardSchema);

export default Billboard;