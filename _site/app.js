var bodyParser = require('body-parser');
var restify = require('restify');
var restifyValidator = require('restify-validator');
var server = restify.createServer(function(req, res) {});
var port = 3000;

restify.CORS.ALLOW_HEADERS.push('authorization');

server.pre(restify.CORS());
server.use(restify.fullResponse({
  origins: ["http://localhost:4200"],
  credentials: true,
  headers: ['Authorization', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Accept-Language', 'Accept-Encoding'],
  methods: ['GET', 'POST', 'DELETE', 'PUT']
}));

server.use(restify.bodyParser());
server.use(restifyValidator);

server.listen(port, function() {
  console.log('Listening on port ' + port);
});

module.exports = server;

require('./routes');
