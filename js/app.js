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

// show modal
$('#contactButton button').click(function(e) {
	e.preventDefault();
	$('.ui.modal')
		.modal('show');
});



window.onscroll = function scrollFunction() {
	if ($(window).height() * 3 < $(document).height()) {
	    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
	        $('#up').css('display', 'block');
	    } else {
	        $('#up').css('display', 'none');
	    }
	}
};

$('#up').click(function(e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, 'fast');
});



// tabs
$('#context1 .menu .item')
	.tab({
		context: $('#context1')
	});
$('#context2 .menu .item')
	.tab({
		// special keyword works same as above
		context: 'parent'
	});

// form validation
$('.ui.form')
	.form({
		on: 'blur',
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
				rules: [{
					type: 'regExp[/^[0-9.()+\\- ]{10,15}$/]',
					prompt: 'Please enter a valid phone number'
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

// focus even if label or div clicked?
$('.field').click(function(e){
	var name = $(this).children('label')[0].innerText.toLowerCase();
	$('[name="' + name + '"').focus();
});


// update localStorage
$('.field > *').not('label').on('change', function(e){
	var name = e.target.name;
	var value = $('[name="' + name + '"')[0].value;
	localStorage.setItem(name, value);
});

// be able to close success message
$('.message .close').on('click', function() {
	$(this).closest('.message').transition('fade');
});

// if no error message, make success true
function checkSuccess(){
	if ($('.error').length === 1) {
		localStorage.setItem('success', 'true');
	}
}

// if success is true
// show success message and update localStorage
if(localStorage.getItem('success') === 'true'){
	$('.positive.message').css('display', 'block');
	localStorage.removeItem('success');
}

// populate fields with localStorage
function populateFields(){
	var fields = $('.field > *').not('label');
	$.each(fields, function(i){
		var field = fields[i];
		var name = field.name;
		var value = localStorage.getItem(name) || '';
		$('[name="' + name + '"]').val(value);
	});
}

populateFields();
