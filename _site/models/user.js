'use strict';
module.exports = function( sequelize, DataTypes ){
    var User = sequelize.define( 'User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        email: DataTypes.STRING,
        hash: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        access: DataTypes.TEXT
    } );
    return User;
};
