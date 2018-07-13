const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema

const HostSchema = new Schema({
  location: {
    type: String,
    required: true
  },
    distanceView: {
    type: Number,
    required: true
  },
  ageMin: {
    type: Number,
    required: true
  },
  ageMax: {
    type: Number,
    unique: true
  },
  guestMin: {
    type: Number,
    required: true
  },
  guestMax: {
    type: Number,
    unique: true
  },
  smoking: {
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
  }

});

module.exports = Host = mongoose.model('hosts', HostSchema);