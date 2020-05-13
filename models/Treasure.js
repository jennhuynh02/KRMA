const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreasureSchema = new Schema ({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  reported: {
    type: Boolean,
    default: false,
  },
  reportMessage: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

const Treasure = mongoose.model('Treasure', TreasureSchema);
module.exports = Treasure;
