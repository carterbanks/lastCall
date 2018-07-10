const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users.js');

const app = express();

//Body-parser middle ware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Use routes
app.use('/api/users', users);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));