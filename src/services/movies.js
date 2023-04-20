const { Error } = require('mongoose');
const Movie = require('../models/movie');
const Users = require('../models/user');

const movieServices = {

  create: async (id, body) => {
    try {
      const { name } = body;
      const user = await Users.findById(id);
      if (!user || user === null) throw new SyntaxError('Usuario no encontrado');
      const movie = await Movie.create({ name, addUser: user })
      return movie;      
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw err
      } else {
        throw err; // rethrow (*)
      }
    }
  },
  findAll: async (query) => {
    try {
      const { limit = 10, page = 0, name = null } = query;
      const allMovies = await Movie.paginate({}, { limit, page });
      return allMovies
    } catch (err) {
      throw err
    }
  },
  findOne: async (id) => {
    try {
      const movie = await Movie.findById(id);
      return movie;
    } catch (err) {
      throw err;
    }
  },
  flag: async (id, flag) => {
    try {
      const movie = await Movie.findById(id);
      if ( !movie ) throw new Error();
      movie.isVisible = flag ? flag : false; 
      const upMovie = await Movie.updateOne({_id: movie._id}, movie)
      return upMovie;
    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports = movieServices