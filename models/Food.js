const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String, enum: ['veg', 'non-veg', 'dessert'], required: true }
});

module.exports = mongoose.model('Food', foodSchema);
