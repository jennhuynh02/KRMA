const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }, 
  keyCount: {
    type: Number,
    default: 0
  },
  savedTreasures: {
    type: Schema.Types.ObjectId,
    ref: 'savedTreasure', 
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
