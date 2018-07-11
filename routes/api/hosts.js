const express = require('express');
const router = express.Router();

// User Model
const Host = require('../../models/Host');

// route get request to api/user
// desc get all users
// access public

router.get('/', (req, res) => {
  Host.find()
  .sort({ date: -1})
    .then(hosts => res.json(hosts));
});

// route post request to api/user
// desc create a user
// access public

router.post('/', (req, res) => {
  const newHost = new Host({
    location: req.body.location,
    distanceView: req.body.distanceView,
    ageMin: req.body.ageMin,
    ageMax: req.body.ageMax,
    guestMin: req.body.guestMin,
    guestMax: req.body.guestMax,
    smoking: req.body.smoking,
    hasAlcohol: req.body.hasAlcohol,
    hasFood: req.body.hasFood,
    hasMoney: req.body.hasMoney,
    hasDD: req.body.hasDD,
    description: req.body.description
  });

  newHost.save().then(host => res.json(host));
});

// route DELETE request to api/user/:id
// desc Delete a user
// access public

router.delete('/:id', (req, res) => {
  Host.findById(req.params.id)
    .then(host => host.remove().then(() => res.json({success: true}))).catch(err => res.status(404).json({success: false}));
});

module.exports=  router;