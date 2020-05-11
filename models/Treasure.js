const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreasureSchema = new Schema ({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'users', 
    default: null,
  },
  treasureType: {
    type: String,
    default: ''
  },
  treasureUrl: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Treasure = mongoose.model('treasure', TreasureSchema);
module.exports = Treasure;
