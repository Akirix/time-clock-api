var server = require('./app');

//Shifts
// GET, PUT, POST
var shifts = require('./controllers/shifts');
server.get('/shifts', shifts.index);
server.get('/shifts/:shift_id', shifts.view);
server.put('/shifts/:shift_id', shifts.update);
server.post('/shifts', shifts.create);

//Users
//GET, PUT, POST, DELTE
var users = require('./controllers/users');
server.get('/users', users.index);
server.get('/users/:user_id', users.view);
server.put('/users/:user_id', users.update);
server.post('/users', users.create);
