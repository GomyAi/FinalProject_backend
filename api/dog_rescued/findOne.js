const userModel = require ('../../models/').dogRescueModel// toma el  model user porque no es necesario tomar todos los models. 
//const {userModel} = require ('../../models/') //{userModel} >  forma en que puedes mandar a llamar a tu attributo de tu modelo...
//desmantelando objetos 
function findOneDogRescue (req, res) {
  const { id } = req.params
  userModel.findOne({ _id: id })
    .then((user) => res.json(user))
    .catch((error) => res.status(400).json(error))
}

module.exports = findOneDogRescue