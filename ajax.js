var api = 'http://localhost:3000';

$( '#test-getShifts' ).click( function(){
    $.ajax( {
        method: 'GET',
        url: api + '/shifts'
    } )
        .success( function( result ){
            var shifts = result.shifts;
            shifts.forEach( function( shift ){
                console.log( shift );
            } );
        } )
        .error( function( err ){
            console.log( err );
        } );
} );

$( '#test-postShifts' ).click( function(){
    var data = JSON.stringify( {
        shift: {
            user_id: "1a2b",
            shift_date: "2016-05-03 18:14:55",
            type: "pto",
            hours: 8,
            pay_period: 5
        }
    } );
    $.ajax( {
        method: 'POST',
        url: api + '/shifts',
        contentType: 'application/json',
        data: data
    } )
        .success( function( result ){
            console.log(result.shift);
        } )
        .error( function( err ){
            console.log( err );
        } );
} );