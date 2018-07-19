const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema

const HostSchema = new Schema({
  location: {
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
  bringAlcohol: {
    type: Boolean,
    default: false
  },
  bringFood: {
    type: Boolean,
    default: false
  },
  bringMoney: {
    type: Boolean,
    default: false
  },
  bringDD: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  guestAge: {
    type: [Number, Number],
    required: true
  },
  guestDistance: {
    type: Number,
    required: true
  },
  guestAmount: {
    type: [Number, Number],
    required: true
  }

});

module.exports = Host = mongoose.model('hosts', HostSchema);