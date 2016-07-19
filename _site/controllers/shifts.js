var db = require( '../models' );
var Shift = db.Shift;
var util = require( 'util' );

exports.index = function( req, res, next ){
    Shift.findAll()
        .then( function( shifts ){
            res.send( 200, { shifts: shifts } );
            return next();
        } )
        .catch( function( err ){
            res.send( 400, { errors: [ err ] } );
            return next();
        } )
};

exports.view = function( req, res, next ){
    Shift.findOne( {
        where: {
            id: req.params.shift_id
        }
    } )
        .then( function( shift ){
            if( !shift ){
                res.send( 404, { errors: [ 'Shift was not found' ] } );
                return next();
            }
            else{
                res.send( 200, { shift: shift } );
                return next();
            }
        } )
        .catch( function( err ){
            return next();
        } );
};

exports.update = function( req, res, next ){
    var data = req.body.shift;
    Shift.findOne( {
        where: {
            id: req.params.shift_id
        }
    } )
        .then( function( shift ){
            if( !shift ){
                res.send( 404, { errors: [ 'Shift was not found' ] } );
                return next();
            }
            else{
                shift.shift_date = data.shift_date;
                shift.type = data.type;
                shift.hours = data.hours;
                shift.pay_period = data.pay_period;
                shift.save()
                    .then( function(){
                        res.send( 200, { shift: shift } );
                        return next();
                    } )
            }

        } )
        .catch( function( err ){
            //res.send( 400, { errors: [ err ] } );
            return next();
        } );
};

exports.create = function( req, res, next ){
    var data = req.body.shift;
    var newShift = Shift.build( {
        user_id: data.user_id,
        shift_date: data.shift_date,
        type: data.type,
        hours: data.hours,
        pay_period: data.pay_period
    } );

    newShift.save()
        .then( function(){
            res.send( 201, { shift: newShift } );
            return next();
        } )
        .catch( function( err ){
            res.send( 400, { errors: [ err ] } );
            return next();
        } );
};
