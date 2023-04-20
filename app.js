
var server = require('./index');
const { db } = require('./src/db');

db().then(() => {
    server.listen(3001, { origins: '*' }, function () {
        console.log('Server is listening on port 3001!');
    });
})
