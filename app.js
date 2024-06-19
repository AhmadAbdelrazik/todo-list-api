// Initialize Express

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Connect to database
const mongoose = require('mongoose');

async function connectDb (db) {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${db}`);
}

connectDb(`todo`);

// Main routing


// Start the server.

app.listen(port, err => {
    if (err) 
        console.log(err);
});