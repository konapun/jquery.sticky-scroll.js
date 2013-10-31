;(function($) {
	/*
	 * An element which scrolls with the page, optionally containing a pin/unpin element
	 * Author: Bremen Braun
	 * 
	 * Example:
	 * $('.sticky-header').stickyScroll({
	 *   stick: $('.stick'),
	 *   unstick: $('.unstick')
	 * })
	 */
	$.fn.stickyScroll = function(opts) {
		var $this = $(this),
		    settings = $.extend({}, opts);
		
		var $window = $(window),
		    $stick = settings.stick,
		    $unstick = settings.unstick,
		    top = $this.offset().top,
		    makeSticky = function() {
				$window.scroll(function() {
					var windowTop = $window.scrollTop();
					$this.toggleClass('sticky', windowTop > top);
				});
			}
		
		/* Events */
		if ($stick) {
			$stick.hide();
			$stick.click(function() {
				makeSticky();
				if ($unstick) {
					$stick.hide();
					$unstick.show();
				}
			});
		}
		
		if ($unstick) {
			$unstick.click(function() {
				var windowTop = $window.scrollTop();
				
				$this.removeClass('sticky');
				$window.unbind('scroll');
				if ($stick) {
					$unstick.hide();
					$stick.show();
				}
			});
		}
		
		makeSticky();
		$this.removeClass('sticky');
	}
}(jQuery));