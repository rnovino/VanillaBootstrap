jQuery(document).ready(function() {
	
	// Fix subnav to top and add extra class
	$('.bs-docs-social.subhead').scrollToFixed({
		marginTop: 40,
		preFixed: function() { jQuery(this).addClass('subnav-fixed'); },
		postFixed: function() { jQuery(this).removeClass('subnav-fixed'); }
	});
	
	$('textarea.TextBox').livequery(function() {
		$(this).autosize();
	});
	
	$('.Video').fitVids();
	
	// Smooth Scroll to Top
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop:0}, 250);
		return false;
	});
	
	// Fancy Fade Jumbotron
	/*var $jumbotron  = $('.jumbotron')
		, $jcontainer = $('.jumbotron .container')
		, opacRatio   = ($jumbotron.height() / 200 ) * 2

	/$(window).on('scroll', function () {
		var diff = 100 - ($(window).scrollTop() / opacRatio)
		$jcontainer.css({ opacity: (diff > 0 ? Math.min(diff, 100) : 0) / 100 })
	});*/
	
	// Make Category selectors utilize Chosen
	$('.Category select').each(function() {
		
		// Trim the trailing spaces of all options
		// and make sure only clean spaces are used
		$(this).find('option').each(function() {
			$text = $.trim($(this).text());
			$(this).contents().replaceWith($text.replace(/(\u00a0)/g,' '));
		});
		
		// Turn option[disabled] into an optgroup header
		// and sort options into newly created optgroup
		$(this).find('option[disabled]').each(function() {
			$label = $(this).text();
			$options = $(this).nextUntil('option[disabled]');
			$optionsHtml = $('<option />').append($($options)).html();
			$(this).replaceWith($('<optgroup label="'+$label+'">'+$optionsHtml+'</optgroup>'));
		});
		
		$(this).chosen();
		
	});
	
});

// Recaptcha
var RecaptchaOptions = {
	theme : 'clean'
};