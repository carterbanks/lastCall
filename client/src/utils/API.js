import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData)
  },

  //Saves a guest request to the database
  saveGuest: function(guestData) {
    return axios.post("/api/parties/guests", guestData)
  },

  //Save a host to the database
  saveHost: function(hostData) {
    return axios.post("/api/parties/hosts", hostData)
  }
};