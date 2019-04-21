const mongoose = require('mongoose');
const model = mongoose.model

const dogRescueSchema = require ('../schemas/drescue.schema') //Solo se necesita el schema de user
const dogResqueModel = model('DogRescue', dogRescueSchema); // 

module.exports = dogResqueModel