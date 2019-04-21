const userModel = require('../../models/').dogRescueModel// toma el  model user porque no es necesario tomar todos los models. 
const ObjectID = require('mongodb').ObjectID; //importart ObjectID de mongo

function deleteUser(req, res) {
    //console.log(req.params)
    userModel.deleteOne(
        { "_id": ObjectID(req.params.id) }//_id define como se llama tu atributo del modelo user.model de mi paramatro
    )
        .then((users) => res.json({ users, message:"Post deleted succesfully" }))
        .catch((error) => res.status(400).json(error))
}

module.exports = deleteUser