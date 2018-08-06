const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

// route post request to api/usersession
// desc create a user
// access public

router.post('/', (req, res, next) => {
  const { body } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;

  if (!email) {
    return res.send({
      success: false,
      message: "Email can't be blank"
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: "Password can't be blank"
    });
  }

  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      return res.send({
        success: false,
        message: "Server error"
      });
    }
    if (users.length != 1) {
      return res.send({
        success: false,
        message: "Invalid"
      });
    }
    const user = users[0];
    if (user.password != password) {
      return res.send({
        success: false,
        message: "Invalid password"
      });
    }

    //Otherwise create user session
    const newUserSession = new UserSession();
    newUserSession.userID = user._id;
    newUserSession.save((err, doc) => {
      if (err) {
        return res.send({
          success: false,
          message: "Server error"
        });
      }
      return res.send({
        success: true,
        message: "Valid sign in",
        token: doc._id
      });
    });
    // .then(usersession => res.json(usersession)).catch(err => console.log(err));
  });
  // .then(users => res.json(users));

});

router.get('/', (req, res, next) => {

});


module.exports = router;