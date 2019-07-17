const express = require('./node_modules/express');
//const bodyParser = require('./node_modules/body-parser');
const app = express();
const port = process.env.PORT || 9000 
const mongoose = require('mongoose'); //require module moongose
mongoose.connect('mongodb://localhost/puppies', {useNewUrlParser: true}); //Connect to Mongo
//var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.json());

var indexRouter = require('./api');
app.listen(port, () => {
    console.log('Ready to work');
});

app.use('/api', indexRouter);

// initialize our express app
