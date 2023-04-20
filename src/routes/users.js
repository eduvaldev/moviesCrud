const server = require('express').Router(); //Import router from express module.
const passport = require('passport');
const userServices = require('../services/users')


server.post('/', async function (req, res) {
	try {
		const user = await userServices.create(req.body);
		return res.status(200).json({
			message: 'Usuario creado exitosamente!',
			data: user,
		});
	} catch (err) {
		return res.status(400).json({
			message: 'Error al crear usuario',
			data: err,
		});
	}
});

// GET USERS
server.get('/', (req, res) => {
	try {
		const findUsers = userServices.findUsers();
		res.status(200).json({
			message: 'Success',
			data: findUsers,
		})
	} catch (err) {
		res.status(500).json({
			message: 'Hubo un error en el servidor',
			data: err,
		});
	}
});

server.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await userServices.findById(id);
		res.status(200).json({
			message: 'Success',
			data: user,
		})
	} catch (err) {
		return res.status(400).json({
			message: 'Error al buscar User',
			data: err,
		});
	}
});


/*********LOGIN ************* */
server.post('/singin', function (req, res, next) {
	passport.authenticate('local', function (err, user, info) {
		if (err) {
			return res.send({ data: { message: 'User or Email incorrect', log: false } });
		}
		if (!user) {
			return res.send({ data: { message: 'User or Email incorrect', log: false } });
		}
		req.logIn(user, function (err) {
			if (err) {
				return next(err);
			}
			return res.send({
				data: user,
			});
		});
	})(req, res, next);
});

server.get('/log/logout', (req, res) => {
	req.logOut();
	res.send({ message: 'logout' });
});



module.exports = server;