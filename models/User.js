const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superuser', 'user'], default: 'user' }
});

module.exports = mongoose.model('User', userSchema);