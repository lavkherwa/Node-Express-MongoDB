const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

// Get a instance of your express app
const app = express();

// Import routes
const postRoute = require('./routes/Posts');

// Middleware
app.use(cors);
app.use(bodyParser.json());
app.use('/posts', postRoute);

// Connect to DB
mongoose.connect(
    process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (data) => {
    console.log('connected to DB')
});

// Make this app start at port http://localhost:3000
app.listen(process.env.PORT);


