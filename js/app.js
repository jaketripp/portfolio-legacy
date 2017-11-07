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
	$('.ui.modal')
		.modal('show');
});

$('#up').click(function(e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, 'slow');
});

$('#context1 .menu .item')
	.tab({
		context: $('#context1')
	});
$('#context2 .menu .item')
	.tab({
		// special keyword works same as above
		context: 'parent'
	});

$('.ui.form')
	.form({
		fields: {
			name: {
				identifier: 'name',
				rules: [{
					type: 'empty',
					prompt: 'Please enter your name'
				}]
			},
			company: {
				identifier: 'company',
				rules: [{
					type: 'empty',
					prompt: 'Please enter your current company'
				}]
			},
			email: {
				identifier: 'email',
				rules: [{
					type: 'email',
					prompt: 'Please enter a valid email address'
				}]
			},
			phone: {
				identifier: 'phone',
				rules: [
				{
					type: 'minLength[7]',
					prompt: 'Please use a minimum of 7 numbers in your phone number'					
				},
				{
					type: 'number',
					prompt: 'Please use only numerical digits (0-9) in your phone number'
				}]
			},
			message: {
				identifier: 'message',
				rules: [{
						type: 'empty',
						prompt: "Please leave a brief message explaining the project you would like to work together on" 
				}]
			}
		}
	});

$('.ui.form .field').on('keydown', function(e) {
	// mobile - have enter go to next
	if (window.screen.width < 750) {
		if (e.keyCode === 13){
			$(this).next().focus();
		}
	} 
});

$('.field').click(function(e){
	var name = $(this).children('label')[0].innerText.toLowerCase();
	$('[name="' + name + '"').focus();
});

$('.message .close')
	.on('click', function() {
		$(this)
		  .closest('.message')
		  .transition('fade');
	});