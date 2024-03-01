// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   orderId: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date },
//   status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
//   feedback: { type: Number, min: 1, max: 5 },
//   image: { type: String }
// });

// module.exports = mongoose.model('Order', orderSchema);
// Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
  amount: Number,
  paymentDetails: Object,
  // Other order details
});

module.exports = mongoose.model('Order', orderSchema);
