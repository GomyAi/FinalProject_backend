var express = require('express');
var router = express.Router(); 

const createUser = require ('./create')
const updateUser = require ('./update')
const findUser = require ('./find')
const findOneUser = require ('./findOne')
const deleteUser = require ('./delete')

router.post('/create', createUser) //mapeando las rutaa de craete user
router.post('/update/:id', updateUser) //mapeando las rutas de update
router.get('/find/', findUser) //mapeando las rutas de find all users
router.get('/findOne/:id', findOneUser) //mapeando las rutas find by id
router.delete('/delete/:id', deleteUser)//mapeando las rutas delete by id

module.exports = router