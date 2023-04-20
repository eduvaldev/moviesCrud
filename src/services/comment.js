const Comment = require('../models/comment');
const Movie = require('../models/movie');
const Users = require('../models/user');
var ObjectId = require('mongodb').ObjectId;

const commentServices = {

  create: async (body) => {
    try {
      const  { text, score, idUser, idMovie } = body;
      console.log(idUser, idMovie);
      const userId = new ObjectId(idUser);
      const movieId = new ObjectId(idMovie);
      
      const user = await Users.findById(idUser);
      const movie = await Movie.findById(idMovie);
  
      if ( !user || !movie ) new SyntaxError('Usuario o pelicula no encontrado');
      
      const comment = Comment.create({ text, score, userId, movieId });
      movie.score = ( movie.score + score ) / 5;
      await Movie.updateOne({_id:movie._id}, movie);
      return comment;
    } catch (err) {
      console.log(err);
      if (err instanceof SyntaxError) {
        throw err
      } else {
        throw err; // rethrow (*)
      }
    }
  },
  findByMovie: async (idMovie, idUser) => {
    try {
      const movieId = new ObjectId(idMovie);
      const userId = new ObjectId(idUser);
      if (movieId) return await Comment.paginate({movieId});
      if (userId) return await Comment.paginate({userId});
      if (!movieId,!userId) throw new SyntaxError('Usuario o pelicula no encontrado');
      return allMovies;
    } catch (err) {
      console.log(err);
      if (err instanceof SyntaxError) {
        throw err
      } else {
        throw err; // rethrow (*)
      }
    }
  },
  delete: async (id) => {
    try {
      const comment = await Comment.findByIdAndDelete(id).exec();
      if ( !comment ) throw new SyntaxError('Comentario no encontrado');
      const movie = await Movie.findById(comment.movieId).exec();
      if ( !movie ) throw new SyntaxError('Pelicula no encontrado');
      movie.score = ( movie.score - comment.score ) / 5;
      await Movie.updateOne({_id:movie._id}, movie);
      return comment;
    } catch (err) {
      console.log(err, 'sssssss');
      if (err instanceof SyntaxError) {
        throw err
      } else {
        throw err; // rethrow (*)
      }      
    }
  }
}

module.exports = commentServices;
