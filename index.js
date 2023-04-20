const express = require('express');
// const bodyParser = require('body-parser');
const { users, movies, comments } = require('./src/routes/index');
const app = express();
const dotenv = require("dotenv");
const passport = require('passport')
const session = require('express-session')
const http = require('http')
var cors = require('cors')

dotenv.config();

app.use(cors())
const server = http.createServer(app)


/*******************Configuracion Passport********************** */
require('./src/passport/auth')
app.use(session({
    secret: 'spiralamejorempresa',
    resave: false,
    saveUninitialized: true,
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  /****************************************************************** */



app.use(cors())


app.use(express.json())
app.use('/users', users);
app.use('/movies', movies);
app.use('/comments', comments);
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});


module.exports = server;