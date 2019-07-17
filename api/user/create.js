const userModel = require ('../../models/')// toma el  model user porque no es necesario tomar todos los models. 

function createUser (req, res) {
  console.log(req.body)
 // res.json(req.body)
    let newUser = new userModel (
      {
        name: req.body.name,
        lastName: req.body.lastName,      
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        statusActive: req.body.statusActive
      }
    );
    newUser.save()
      .then(function(){
        res.json(newUser)
      })
      .catch(function(error){
        res.status(400).json(error)
      } 
      )
};
      

 module.exports = createUser;
