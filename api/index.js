var express = require('express');
var router = express.Router(); //express tiene su modulo para manejar rutas. Router() es el modulo(funcion) de express.

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).send('Hello world Yesi')
    
});
module.exports = router;
