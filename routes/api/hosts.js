const express = require('express');
const router = express.Router();

// User Model
const Host = require('../../models/Host');

// route get request to api/hosts
// desc get all users
// access public

router.get('/', (req, res) => {
  Host.find()
  .sort({ date: -1})
    .then(hosts => res.json(hosts));
});

// route post request to api/hosts
// desc create a user
// access public

router.post('/', (req, res) => {
  const newHost = new Host({
    location: req.body.location,
    smokingIn: req.body.smokingIn,
    smokingOut: req.body.smokingOut,
    bringAlcohol: req.body.hasAlcohol,
    bringFood: req.body.hasFood,
    bringMoney: req.body.hasMoney,
    bringDD: req.body.hasDD,
    description: req.body.description,
    guestAge: req.body.guestAge,
    guestDistance: req.body.guestDistance,
    guestAmount: req.body.guestAmount
  });

  newHost.save().then(host => res.json(host)).catch(err => console.log(err));
});

// route DELETE request to api/hosts/:id
// desc Delete a host
// access public

router.delete('/:id', (req, res) => {
  Host.findById(req.params.id)
    .then(host => host.remove().then(() => res.json({success: true}))).catch(err => res.status(404).json({success: false}));
});

module.exports=  router;