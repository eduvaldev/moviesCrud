const router = require('express').Router();
const { Movie } = require('../models/movie');
const { User } = require('../models/user');


module.exports = {
  users: require('./users'),
  movies: require('./movies'),
  comments: require('./comment')
};