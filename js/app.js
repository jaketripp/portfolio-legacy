$('.special.cards .image').dimmer({
  on: 'hover'
});

var clipboard = new Clipboard('#copy');

$('#copy').popup({on: 'manual'});

$('#copy').on('click', function() {
    $('#copy').popup('show');
    // hide after 1 second
    setTimeout(function() {
        $('#copy').popup('hide');
    }, 1000)
    
});
