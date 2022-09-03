// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes');

// Setup data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(express.json());

// app.use('/api', routes);
app.use('/', routes);

// Listen on port
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
    });