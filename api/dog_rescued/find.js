const userModel = require ('../../models').dogRescueModel// toma el  model user porque no es necesario tomar todos los models. 
function findUser (req, res) {

  userModel.find()//busca todo
      .then((users) => res.json({ users }))
      .catch((error) => res.status(400).json(error))
  }
  
  module.exports = findUser