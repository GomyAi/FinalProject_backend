
const express = require('./node_modules/express');
const app = express();
const port = process.env.PORT || 9000 

app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})


app.listen(port, () => {
    console.log('Ready to work');
});

const bodyParser = require('./node_modules/body-parser');
// initialize our express app

const product = require('./routes/product.route'); // Imports routes for the products
const mongoose = require('mongoose'); //require module moongose
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true}); //Connect to Mongo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

