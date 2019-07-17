const userModel = require('../../models/').dogRescueModel// toma el  model user porque no es necesario tomar todos los models. 
const ObjectID = require('mongodb').ObjectID; //importart ObjectID de mongo

function updateUser (req,res){
    userModel.updateOne(
        { "_id": ObjectID(req.params.id) },
        {
            $set: {
                id_user: req.body.id_user,
                description: req.body.description,
                race: req.body.race,
                size: req.body.size,
                color: req.body.color,
                location: req.body.location,
                date_rescued: new Date(req.body.date_rescued)    
            }
        })
        .then(function (newUser) {
            res.json(newUser)
        })
        .catch(function (error) {
            res.status(400).json(error)
        }
        )
        ;
}

module.exports = updateUser;
