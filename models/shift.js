'use strict';
module.exports = function( sequelize, DataTypes ){
    var Shift = sequelize.define( 'Shift', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        user_id: DataTypes.STRING,
        shift_date: DataTypes.DATE,
        type: DataTypes.STRING,
        hours: DataTypes.INTEGER,
        pay_period: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function( models ){
                // associations can be defined here
            }
        }
    } );
    return Shift;
};