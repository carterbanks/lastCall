const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

router.get('/', (req, res, next) => {
  //Getting user token
  const { query } = req;
  const { token } = query;
  //Verify token is unique
  UserSession.find({
    _id: token,
    isConnected: true
  }, (err, sessions) => {
    if (err) {
      return res.send({
        success: false,
        message: "Invalid ID length"
      });
    } 
    // if (sessions.length != 1) {
    //   console.log(sessions.length);
    //   return res.send({
    //     success: false,
    //     message: "Invalid ID"
    //   });
    // } 
    else {
      return res.send({
        success: true,
        message: "Success"
      });
    }
  });
  
}); 

module.exports=  router;