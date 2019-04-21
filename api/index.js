/////TODOS LOS ENDPOINTS SE VAN A LA API

var express = require('express');
var router = express.Router(); //express tiene su modulo para manejar rutas. Router() 
//es el modulo(funcion) de express.
//Aqui estaran mis rutas que tomare de mi api/index
const UserRouter = require('./user')
const RescueRouter = require('./dog_rescued')

router.use('/user', UserRouter)
router.use('/dog_rescued', RescueRouter)

router.get('/', function(req, res, next) {
    res.status(200).send('Hello world Yesi')
    
});
module.exports = router;
