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
    e.preventDefault();
	var target = $("#contact").offset().top;
	$('html, body').animate({ scrollTop: target }, 'slow');
});

$('#up').click(function(e) {
    e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, 'slow');
});

$('#context1 .menu .item')
  .tab({
    context: $('#context1')
  })
;
$('#context2 .menu .item')
  .tab({
    // special keyword works same as above
    context: 'parent'
  })
;