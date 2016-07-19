var api = 'http://localhost:3000';
console.log('hey');

$('#test-getShifts').click(function() {
    $.ajax({
            method: 'GET',
            url: api + '/shifts'
        })
        .success(function(result) {
            var shifts = result.shifts;
            shifts.forEach(function(shift) {
                console.log(shift);
            });
        })
        .error(function(err) {
            console.log(err);
        });
});

// here is the shifts object. feel free to edit if needed
$('#shifts-submit').click(function() {
    var shifts = {};
    var date = new Date($('.year').html() + ' ' + $('.month').html());
    var year = date.getFullYear();
    var month = date.getMonth();
    shifts.name = $('.name').html();
    shifts.year = year;
    shifts.month = month;
    shifts.shifts = [];
    $('.calendar-form-wrapper:not(.template)').each(function() {
        if ($(this).hasClass('inactive') && $(this).find('.hours').val() == 0) {
            return;
        }
        shifts.shifts.push({
            date: $(this).find('.calendar-date').html(),
            worktype: $(this).find('.work-type-selected').html(),
            hours: $(this).find('.hours').val()
        });
    });
    $.ajax({
            method: 'POST',
            url: api + '/shifts',
            contentType: 'application/json',
            data: JSON.stringify({
                timesheet: {
                    shifts
                }
            })
        })
        .success(function(result) {
            console.log(result.shift);
        })
        .error(function(err) {
            console.log(err);
        });
});
