// Import required modules
const mongoose = require("mongoose");

// Define Coupon Schema
const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  discountAmount: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
});

// Create the Coupon model
const Coupon = mongoose.model('Coupon', couponSchema);

// Export the model
module.exports = Coupon;
