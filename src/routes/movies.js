const server = require('express').Router();
const movieServices = require('../services/movies');

server.post('/', async function (req, res) {
	try {
		const { name, userId} = req.body;
		const movie = await movieServices.create(userId, req.body);
		return res.status(200).json({
			message: 'Pelicula agregada correctamente Falta autorizacion del usuario administrador',
			data: movie,
		});
	} catch (err) {
		return res.status(400).json({
			message: 'Error al crear Pelicula',
			data: err,
		});
	}
});

server.get('/', async function(req, res) {
	try {
		const allMovies = await movieServices.findAll(req.query);
		return res.status(200).json({
			message: 'Respuesta correcta todas las preguntas',
			data: allMovies,
		});
	} catch (error) {
		return res.status(400).json({
			message: 'Error en la consulta de las Pelucilas',
			data: error,
		});
	}
})

server.get('/:id', async function (req, res) {
	try {
		const { id } = req.params;
		const movie = await movieServices.findOne(id);
		return res.status(200).json({
			message: 'Succes',
			data: movie,
		});
	} catch (error) {
		return res.status(400).json({
			message: 'Error en la consulta de la pelicula',
			data: error,
		});
	}
})

server.get('/aprove/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { flag } = req.query;
		const flagMovie = await movieServices.flag(id, flag);
		
		return res.status(200).json({
			message: 'Succes',
			data: flagMovie,
		});
	} catch (err) {
		return res.status(400).json({
			message: 'Error al buscar User',
			data: err,
		});		
	}
})



module.exports = server;