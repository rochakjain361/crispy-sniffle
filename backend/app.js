const express = require('express');
const app = express();

app.use(express.json());

//import all the routes
const products = require('./routes/product')

app.get('/hw', function(req, res){
    res.send('Hello World!')
})

app.use('/api/v1',  products)

module.exports = app;