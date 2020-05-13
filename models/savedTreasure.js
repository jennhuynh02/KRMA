const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedTreasureSchema = new Schema({
  saved: {
    type: Array,
    default: [],
  }
})

const SavedTreasure = mongoose.model('SavedTreasure', SavedTreasureSchema);
module.exports = SavedTreasure;