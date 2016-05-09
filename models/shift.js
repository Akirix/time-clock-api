'use strict';
module.exports = function(sequelize, DataTypes) {
  var Shift = sequelize.define('Shift', {
    shift_date: DataTypes.STRING,
    type: DataTypes.STRING,
    hours: DataTypes.INTEGER,
    pay_period: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Shift;
};
