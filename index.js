const express = require('express');

const joi = require('joi');
const logger = require('./logger');

console.log(logger);
logger.log("Hello");
const app = new express();

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log("Started listening on  PORT " + PORT);
});

app.get('/', (req, res) => {
    console.log("Hello This is the home page..");
    return res.send('Home Page');
});

app.get('/squareOf2', (req, res) => {
    console.log("Hello This is the home page..");
    return res.send(' 2*2 = 4' );
})