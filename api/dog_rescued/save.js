const dogRescueModel = require ('../../models/dog.model')// toma el  model user porque no es necesario tomar todos los models. 

function createDogRescued (req, res) {
    console.log(req.body)
    //res.json(req.body)
      let newDogRescue = new dogRescueModel (
        {
            id_user: req.body.id_user,
            description: req.body.description,
            race: req.body.race,
            size: req.body.size,
            color: req.body.color,
            location: req.body.location,
            date_rescued: new Date(req.body.date_rescued)

        }
    );
        
    newDogRescue.save()
      .then(function(){
        res.json(newDogRescue)
      })
      .catch(function(error){
        res.status(400).json(error)
      } 
      )

}

module.exports = createDogRescued;
