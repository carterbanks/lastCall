const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

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
    name: req.body.name
  });

  newUser.save().then(user => res.json(user));
});

// route DELETE request to api/user/:id
// desc Delete a user
// access public

router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true}))).catch(err => res.status(404).json({success: false}));
});

module.exports=  router;