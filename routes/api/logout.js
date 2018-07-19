const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

router.get('/', (req, res, next) =>{
    //Getting user token
    const { query } = req;
    const { token } = query;
    //Verify token is unique
    UserSession.findOneAndUpdate({
      _id: token,
      isConnected: true
    }, {
      $set: {
        isConnected:false
      }
    }, null, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "Server error"
        });
      }  else {
        return res.send({
          success: true,
          message: "Success"
        });
      }
    });
});


module.exports=  router;