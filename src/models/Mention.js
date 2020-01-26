const mongoose = require('mongoose');

const MentionSchema = new mongoose.Schema({
  name: String,
  mention: String,
  current_date: Date
});

module.exports = mongoose.model('Mentions', MentionSchema);