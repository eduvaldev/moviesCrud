const server = require('express').Router(); //Import router from express module.
const passport = require('passport');
const commentServices = require('../services/comment');

server.post('/', async function (req, res) {
  try {
    const commentSave = await commentServices.create(req.body);
    res.status(200).json({
			message: 'Success',
			data: commentSave,
		})
  } catch (err) {
    return res.status(400).json({
      message: 'Error al crear Commentario',
      data: err,
    });
  }
})

server.get('/', async function (req, res) {
  try {
    const { idMovie, idUser } = req.query;
    const comments = await commentServices.findByMovie(idMovie, idUser);

    res.status(200).json({
			message: 'Success',
			data: comments,
		})
  } catch (err) {
    return res.status(400).json({
			message: 'Error al buscar comments',
			data: err,
		});
  }
})

server.delete('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const commentDelete = await commentServices.delete(id);
    res.status(200).json({
			message: 'Success',
			data: commentDelete,
		})
  } catch (err) {
    console.log(err);
    return res.status(400).json({
			message: 'Error al borrar comments',
			data: err,
		});    
  }
})

module.exports = server;