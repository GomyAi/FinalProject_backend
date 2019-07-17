const mongoose = require('mongoose'); //importa un archivo de mongo 
const Schema = mongoose.Schema; //clase de mongo para estructura de tablas

let rescueSchema = new Schema({
    id_user: {type: String, required: true, max: 100},
    description: {type: String, required: true, max:100},
    race: {type: String, required: true, max:100},
    size: {type:String, required: true, max:100},
    color: {type: String, required: true, max:100},
    location: {type: String, required: true, cleamax:100 },
    date_rescued: {type: Date, required: true },

});

// Export the model
module.exports = rescueSchema
//mayuscula porque es una clase (Rescue)