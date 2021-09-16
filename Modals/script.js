$(function() {

    $('#myModal2').modal('show');


    $('#btnModal').click(function() {
        $('#myModal3').modal('show');
        console.log('click');
    });


    $('#myModal3').on('hide.bs.modal', function(e) {
        console.log('hide');
    });

    $('#myModal3').on('hidden.bs.modal', function(e) {
        console.log('hidden');
    });


    $('#myModal3').on('show.bs.modal', function(e) {
        console.log('show');
    });

    $('#myModal3').on('shown.bs.modal', function(e) {
        console.log('shown');
    });



});