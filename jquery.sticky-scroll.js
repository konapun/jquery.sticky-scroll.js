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
		    settings = $.extend({
		    	stickToBottom: $this.hasClass('stick-bottom')
		    }, opts);
		
		var $window = $(window),
		    $stick = settings.stick,
		    $unstick = settings.unstick,
		    top = $this.offset().top,
		    bottom = $(document).height(),
		    makeSticky = function() {
		    	if (settings.stickToBottom) {
		    		$window.scroll(function() {
		    			var windowBottom = $window.scrollTop() + $(window).height();
		    			$this.toggleClass('sticky stick-bottom', windowBottom < bottom);
		    			$this.css('z-index', 999);
		    		});
		    	}
		    	else {
		    		$window.scroll(function() {
		    			var windowTop = $window.scrollTop();
		    			$this.toggleClass('sticky stick-top', windowTop > top);
		    			$this.css('z-index', 999);
		    		});
		    	}
		    };
         
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
