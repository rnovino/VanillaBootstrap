jQuery(document).ready(function() {
	
	$('html').show();
	
	// Autosize textareas
	$('textarea.TextBox').livequery(function() {
		$(this).autosize();
	});
	
	// Make videos fluid
	$('.Video').fitVids();
	
	// Save forms locally
	$('form').livequery(function(){
		$(this).sisyphus({timeout: 5});
	});
	
	// Stop auto drafts
	$.fn.autosave = function(opts) {
		return;
	}
	
	// Smooth Scroll to Top
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop:0}, 250);
		return false;
	});
	
	// Nice excerpt popovers
	$('.ItemDiscussion').each(function() {
		var $item = $(this).find('a.Title');
		var $title = $item.html();
		var $excerpt = $(this).find('.Excerpt').remove().text();
		$item
			.attr('rel', 'tooltip')
			//.attr('data-title', 'Excerpt')
			.attr('data-original-title', $excerpt)
			.attr('data-placement', 'right');
	});
	
	// Enable Popovers and Tooltips
	$("a[rel=popover]").popover();
	$("a[rel=tooltip]").tooltip();
	
	// Make Category selectors utilize Chosen
	$('.Category select').each(function() {
		
		// Trim the trailing spaces of all options
		// and make sure only clean spaces are used
		$(this).find('option').each(function() {
			var $text = $.trim($(this).text());
			$(this).contents().replaceWith($text.replace(/(\u00a0)/g,' '));
		});
		
		// Turn option[disabled] into an optgroup header
		// and sort options into newly created optgroup
		$(this).find('option[disabled]').each(function() {
			var $label = $(this).text();
			var $options = $(this).nextUntil('option[disabled]');
			var $optionsHtml = $('<option />').append($($options)).html();
			$(this).replaceWith($('<optgroup label="'+$label+'">'+$optionsHtml+'</optgroup>'));
		});
		
		$(this).chosen();
		
	});
	
});

// Recaptcha
var RecaptchaOptions = {
	theme : 'clean'
};

// OuterHTML function
jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};