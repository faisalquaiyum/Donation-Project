const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  referralCode: { type: String, required: true, unique: true },
  donations: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);