var express = require('express');
var router = express.Router(); 

const createDogRescue = require ('./save')
const upsateDogRescue = require ("./update")
const findAllDogsRescue = require ("./find")
const findOneRescueDog = require ("./findOne")
const deleteDogRescue = require ("./deleteRescueDog")


router.post('/save', createDogRescue) //mapeando las rutas.
router.post('/update-dog-rescue/:id', upsateDogRescue) //mapeando las rutas.
router.delete('/delete-post-dog-rescue/:id',deleteDogRescue)
router.get('/find-all-dogs-rescue/', findAllDogsRescue)
router.get('/find-one-dog-rescue/:id', findOneRescueDog)

module.exports = router