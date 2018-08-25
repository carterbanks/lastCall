const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');
const Host = require('../../models/Host');
const Guest = require('../../models/Guest');

// route get request to api/user
// desc get all users
// access public

router.get('/:email', (req, res, next) => {

  User.find({
    email: req.params.email
  })
  // .sort({ date: -1})
    .then(users => res.json(users));

  // User.find({
  //   email: req.params.email
  // }, (err, previousUsersEmail) => {
  //   if(err) {
  //     return res.send({
  //       success: false,
  //       message: 'Error: First Server error'
  //     });
  //   } else if (previousUsersEmail.length > 0) {
  //     return res.send({
  //       success: true,
  //       message: 'Account found'
  //     });
  //     // .then(user => res.json(user));
  //   }
  // })
  // .sort({ date: -1})
    // .then(user => res.json(user));
    //          ^res.json(users), 
});

// route post request to api/user
// desc create a user
// access public

router.post('/:email', (req, res) => {
  const { body } = req;
  const { 
    firstName,
    lastName,
    location,
    birthdate,
    phoneNumber,
    password
  } = body;
  let { email } = body;
  
  if(!firstName) {
    return res.send({
      success: false,
      message: 'Error: First name cannot be blank'
    });
  } 
  if(!lastName) {
    return res.send({
      success: false,
      message: 'Error: Last name cannot be blank'
    });
  }
  if(!location) {
    return res.send({
      success: false,
      message: 'Error: Location cannot be blank'
    });
  }
  if(!birthdate) {
    return res.send({
      success: false,
      message: 'Error: Birthdate cannot be blank'
    });
  }
  if(!phoneNumber) {
    return res.send({
      success: false,
      message: 'Error: Phone number cannot be blank'
    });
  }
  if(!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank'
    });
  }

  if(!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank'
    });
  }
  
  email = email.toLowerCase();

    User.find({
      email: email
    }, (err, previousUsersEmail) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: First Server error'
        });
      } else if (previousUsersEmail.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account with this email address already exists'
        });
      }
      User.find({
        phoneNumber: phoneNumber
      }, (err, previousUsersPhone) => {
        if(err) {
          return res.send({
            success: false,
            message: 'Error: First Server error'
          });
        } else if (previousUsersPhone.length > 0) {
          return res.send({
            success: false,
            message: 'Error: Account with this phone number already exists'
          });
        }


      //Saves new user
      const newUser = new User();
      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.phoneNumber = phoneNumber;
      newUser.location = location;
      newUser.birthdate = birthdate;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if(err) {
          console.log(err);
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        } 
          return res.send({
            success: true,
            message: 'New user signed up!'
          });
      });
      // .then(user => res.json(user)).catch(err => console.log(err));
    });
  });
});

// route DELETE request to api/user/:id
// desc Delete a user
// access public

router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true}))).catch(err => res.status(404).json({success: false}));
});

module.exports=  router;