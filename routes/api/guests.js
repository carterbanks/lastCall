const express = require('express');
const router = express.Router();

// User Model
const Guest = require('../../models/Guest');

// route get request to api/guest
// desc get all guests
// access public

router.get('/', (req, res) => {
  Guest.find()
  .sort({ date: -1})
    .then(guests => res.json(guests));
});

// route post request to api/guest
// desc create a guest
// access public

router.post('/', (req, res) => {
  const newGuest = new Guest({
    guestLocation: req.body.guestLocation,
    smokingIn: req.body.smokingIn,
    smokingOut: req.body.smokingIn,
    hasAlcohol: req.body.hasAlcohol,
    hasFood: req.body.hasFood,
    hasMoney: req.body.hasMoney,
    hasDD: req.body.hasDD,
    description: req.body.description,
    partyAge: req.body.partyAge,
    partyDistance: req.body.partyDistance
  });

  newGuest.save().then(guest => res.json(guest)).catch(err => console.log(err));
});

// route DELETE request to api/guest/:id
// desc Delete a guest
// access public

router.delete('/:id', (req, res) => {
  Guest.findById(req.params.id)
    .then(guest => guest.remove().then(() => res.json({success: true}))).catch(err => res.status(404).json({success: false}));
});

module.exports=  router;