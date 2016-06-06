var db = require( '../models' );
var User = db.User;
var util = require( 'util' );

exports.index = function( req, res, next ){
    User.findAll()
        .then( function( users ){
            res.send( 200, { users: users } );
            return next();
        } )
        .catch( function( err ){
            res.send( 400, { errors: [ err ] } );
            return next();
        } )
};

exports.view = function( req, res, next ){
    User.findOne( {
        where: {
            id: req.params.user_id
        }
    } )
        .then( function( shift ){
            if( !shift ){
                res.send( 404, { errors: [ 'User not found' ] } );
                return next();
            }
            else{
                res.send( 200, { user: user } );
                return next();
            }
        } )
        .catch( function(){
            return next();
        } );
};

exports.update = function( req, res, next ){
    var data = req.body.user;
    User.findOne( {
        where: {
            id: req.params.user_id
        }
    } )
        .then( function( user ){
            if( !user ){
                res.send( 404, { errors: [ 'User not found' ] } );
                return next();
            }
            else{
                user.email = data.email;
                user.hash = data.hash; //WIP: needs to actually be hashed for security
                user.first_name = data.first_name;
                user.last_name = data.last_name;
                user.access = null; //WIP
                user.save()
                    .then( function(){
                        res.send( 200, { user: user } );
                        return next();
                    } )
            }

        } )
        .catch( function( err ){
            return next();
        } );
};

exports.create = function( req, res, next ){
    console.log(req.body.user);
    var data = req.body.user;
    var newUser = User.build( {
        email: data.email,
        hash: data.hash, //WIP: needs to be hashed for security
        first_name: data.first_name,
        last_name: data.last_name,
        access: null //WIP
    } );

    newUser.save()
        .then( function(){
            res.send( 201, { user: newUser } );
            return next();
        } )
        .catch( function( err ){
            console.log('errors');
            res.send( 400, { errors: [ err ] } );
            return next();
        } );
};
