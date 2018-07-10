const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/UserSchema');

// route get request to api/items
// desc get all users
// acess public

router.get('/', (req, res) => {
  User.find()
  .sort({ date: -1})
    .then(users => res.json(users));
});

module.exports=  router;