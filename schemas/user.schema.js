const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, lowercase: true, required: true, max: 100},
    lastName: {type: String, lowercase: true, required: true, max:100},
    email: {type: String, lowercase: true, required: true, max:100},
    password: {type:String, required: true, max:10},
    phone: {type: String, required: true, max:10},
    statusActive: {type: String, lowercase: true, required: true, max:100},
});

// Export the model
module.exports = userSchema;