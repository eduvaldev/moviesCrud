const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    required: true,
    enum: [ 'user', 'admin' ],
    default: 'user'
  }
})

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
