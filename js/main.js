(function($) {

	"use strict";

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

})(jQuery);
jQuery.fn.transformare = function() {
	$('.potato').each(function() {
		$('#right').append($(this));
	});
	return;
};
jQuery.fn.smecherie = function(abc) {
	var i=0;
	var intervalid = setInterval(function () {
		$('.container2').eq(i).addClass(abc.toString());
		i++;
		if(i===6) clearInterval(intervalid);
	},500);
	return;
};