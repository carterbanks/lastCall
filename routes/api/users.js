const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');
const Host = require('../../models/Host');
const Guest = require('../../models/Guest');

// route get request to api/user
// desc get all users
// access public

router.get('/', (req, res) => {
  User.find()
  .sort({ date: -1})
    .then(users => res.json(users));
});

// route post request to api/user
// desc create a user
// access public

router.post('/', (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location,
    birthdate: req.body.birthdate,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    userName: req.body.userName,
    password: req.body.password
  });

  newUser.save().then(user => res.json(user)).catch(err => console.log(err));
});

// route DELETE request to api/user/:id
// desc Delete a user
// access public

router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true}))).catch(err => res.status(404).json({success: false}));
});

module.exports=  router;