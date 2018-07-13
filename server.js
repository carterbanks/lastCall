const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const guests = require('./routes/api/guests');
const hosts = require('./routes/api/hosts');

const app = express();

//Body-parser middle ware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Use routes
app.use('/api/users', users);
app.use('/api/parties/host', hosts);
app.use('/api/parties/guests', guests);

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Server started on port ${port}`));