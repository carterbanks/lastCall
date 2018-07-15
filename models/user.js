const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
    lastName: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }

});

module.exports = User = mongoose.model('user', UserSchema);