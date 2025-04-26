const mongoose = require('mongoose');

const DailySchema = new mongoose.Schema({
  quote: { type: String, required: true },
  reflection: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Daily', DailySchema);
