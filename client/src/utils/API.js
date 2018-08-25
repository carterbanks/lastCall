import axios from "axios";
import cors from 'cors';

export default {
  //Posts a login session
  userLogin: function(loginData) {
    return axios.post("/api/usersessions", loginData);
  },
  //Verifies user token for sign in
  verifySignIn: function(token) {
    return axios.get("/api/verify?token=" + token);
  },
  //Logs user out
  userLogout: function(token) {
    return axios.get("/api/logout?token=" + token);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  //Gets users from the database
  getUsers: function() {
    return axios.get("/api/users");
  },
  //Get specific user
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },
  //Saves a guest information to the database
  saveGuest: function(guestData) {
    return axios.post("/api/parties/guests", guestData);
  },
  //Gets guests from the DB
  getGuests: function() {
    return axios.get("/api/parties/guests");

  },
  //Deletes guests from the DB
  deleteGuest: function(id) {
    return axios.delete("/api/parties/guests/" + id);
  },
  //Save a hosted party to the database
  saveHost: function(hostData) {
    return axios.post("/api/parties/hosts", hostData);
  },
  //Gets parties from the database
  getHostParties: function() {
    return axios.get("/api/parties/hosts");
  },
  //Get specific party by id
  getHostParty: function(id) {
    return axios.get("/api/parties/hosts/" + id);
  },
  //Deletes party
  deleteHostParty: function(id) {
    return axios.delete("/api/parties/hosts/" + id);
  }

};