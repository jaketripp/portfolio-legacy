// handle card dimmer
$('.special.cards .image').dimmer({
  on: 'hover'
});

// copy to clipboard
var clipboard = new Clipboard('#copy');

// popup for copy to clipboard
$('#copy').popup({on: 'manual'});

$('#copy').on('click', function() {
    $('#copy').popup('show');
    setTimeout(function() {
        $('#copy').popup('hide');
    }, 1000)
});