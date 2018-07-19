const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema

const UserSessionSchema = new Schema({
  userId: {
    type: String,
    default: ""
  },
  timeStamp: {
    type: Date,
    default: Date.now()
  },
  isConnected: {
    type: Boolean,
    default: true
  }

});

module.exports = UserSession = mongoose.model('usersession', UserSessionSchema);