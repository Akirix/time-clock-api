var server = require('./app');

//Shifts
// GET, PUT, POST
var shifts = require('./controllers/shifts');
server.get('/shifts', shifts.index);
server.get('/shifts/:id', shifts.view);
server.put('/shifts/:id', shifts.update);
server.post('/shifts', shifts.create);

//Users
//GET, PUT, POST, DELTE
var users = require('./controllers/users');
server.get('/users', users.index);
server.get('/users/:id', users.view);
server.put('/users/:id', users.update);
server.post('/users', users.create);
