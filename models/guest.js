const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema

const GuestSchema = new Schema({
  guestLocation: {
    type: String,
    required: true
  },
  smokingIn: {
    type: Boolean,
    default: false
  },
  smokingOut: {
    type: Boolean,
    default: false
  },
  hasAlcohol: {
    type: Boolean,
    default: false
  },
  hasFood: {
    type: Boolean,
    default: false
  },
  hasMoney: {
    type: Boolean,
    default: false
  },
  hasDD: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  partyAge: {
    type: [Number],
    required: true
  },
  partyDistance: {
    type: [Number],
    required: true
  }

});

module.exports = Guest = mongoose.model('guest', GuestSchema);