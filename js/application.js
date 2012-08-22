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

jQuery(document).ready(function() {

	// Buttons
	$('.Button').livequery(function() {
		$(this).toggleClass('Button btn');
	});
	$('a.Cancel').livequery(function() {
		$(this).addClass('btn btn-danger');
	});
	$('.Cancel').find('a').livequery(function() {
		$(this).addClass('btn btn-danger');
	});
	$('.ForgotPassword').livequery(function() {
		$(this).addClass('btn btn-danger');
	});
	$('.Primary.btn, .DiscussionButton').livequery(function() { 
		$(this).addClass('btn-primary');
	});
	
	// Checkboxes and radio buttons
	$('.CheckBoxLabel').livequery(function() {
		$(this).toggleClass('CheckBoxLabel checkbox');
	});
	$('.RadioLabel').livequery(function() {
		$(this).toggleClass('RadioLabel radio');
	});
	
	// Pagination
	$('.MorePager').livequery(function() {
		$(this).find('a').addClass('btn btn-small btn-block');
	});
	
	// Flyout Menus
	$('.MenuItems').livequery(function() {
		$(this).toggleClass('MenuItems dropdown-menu');
	});
	$('.FlyoutMenu').livequery(function() {
		$(this).addClass('dropdown-menu');
	});
	$('.ac_results').livequery(function() {
		$(this).find('ul').addClass('typeahead dropdown-menu');
	});
	
	// Navigation
	$('.dropdown-menu ul li hr').livequery(function() {
		$(this).parent().addClass('divider');
		$(this).remove();
	});
	
	// Modals
	$('.Popup').livequery(function() { $(this).find('.Body').addClass('modal'); });
	$('.Popup h1, .Popup h2').livequery(function() { $(this).addClass('modal-header'); });
	$('.Popup .Content .MainForm, .Popup .Content .Legal, .Popup .Content > form, .Popup .Content > div, .Popup .Content > p, .Popup .Content .Methods').livequery(function() { $(this).addClass('modal-body'); });
	$('.Popup .Footer span').livequery(function() { $(this).addClass('close'); });
	
	// Grouped Buttons
	$('.ButtonGroup').livequery(function() {
		$(this).find('.Dropdown').addClass('dropdown-menu');
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