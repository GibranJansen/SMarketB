const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cpf: {type: Number, required: true, unique: true}
})

module.exports = mongoose.model("UserModel", userSchema)

