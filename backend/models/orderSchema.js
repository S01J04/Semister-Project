import mongoose from 'mongoose';
const { Schema } = mongoose;

// Define schema for order
const orderSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: true
  },
  billboard: {
    type: Schema.Types.ObjectId,
    ref: 'Billboard',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// Create and export Order model
const Order = mongoose.model('Order', orderSchema);
export default Order;
