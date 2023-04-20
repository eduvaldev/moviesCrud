const mongoose = require("mongoose");
const {DB_PASSWORD, DB_HOST, DB_USER} = require('../.env')

 const db = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/movies')
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error);
  }
}

module.exports = {db}