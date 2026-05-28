const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  farmName: { type: String, required: true },
  location: { type: String, required: true },
  totalArea: { type: Number, required: true },
  cultivatedArea: { type: Number, required: true },
  soilType: { type: String, required: true },
  waterSource: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Farm', farmSchema);