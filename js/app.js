// handle card dimmer
$('.special.cards .image').dimmer({
	on: 'hover'
});

// copy to clipboard
var clipboard = new Clipboard('#copy');

// popup for copy to clipboard
$('#copy').popup({ on: 'manual' });

$('#copy').on('click', function() {
	$('#copy').popup('show');
	setTimeout(function() {
		$('#copy').popup('hide');
	}, 1000);
});

$('#contactButton button').click(function(e) {
    event.preventDefault();
	var target = $("#contact").offset().top;
	$('html, body').animate({ scrollTop: target }, 'slow');
});

$('#up').click(function(e) {
    event.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, 'slow');
});