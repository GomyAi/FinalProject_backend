const mongoose = require('mongoose');
const model = mongoose.model

const userSchema = require ('../schemas/user.schema') //Solo se necesita el schema de user

const userModel = model('User', userSchema); // 

module.exports = userModel