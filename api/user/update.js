const userModel = require('../../models/user.model')// toma el  model user porque no es necesario tomar todos los models. 
const ObjectID = require('mongodb').ObjectID; //importart ObjectID de mongo

function updateUser (req,res){
    userModel.updateOne(
        { "_id": ObjectID(req.params.id) },
        {
            $set: {

                name: req.body.name,
                lastName: req.body.lastName,      
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                statusActive: req.body.statusActive
                
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
