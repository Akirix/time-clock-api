var db = require('../models');
var Shift = db.shift;
var util = require('util');

exports.index = function(req, res, next) {
  console.log('index');
};

exports.view = function(req, res, next) {
  console.log('view');
};

exports.update = function(req, res, next) {
  console.log('update');
};

exports.create = function(req, res, next) {
  console.log('create');
};
