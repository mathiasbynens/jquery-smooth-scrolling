/*!
* Smooth Scrolling jQuery Plugin v1.4
* @link http://github.com/mathiasbynens/Smooth-Scrolling-jQuery-Plugin
* @author Mathias Bynens <http://mathiasbynens.be/>
*/
;(function($) {
	$.fn.smoothScroll = function(speed) {
		speed = ~~speed || 400;
		// Look for links to anchors (on any page)
		this.find('a[href*=#]').click(function(event) {
			var $scrollElement = $.browser.opera ? $('html') : $('html, body'),
			$hash = $(this.hash); // The in-document element the link points to
			// Don’t jump to the link right away
			event.preventDefault();
			// If it’s a link to an anchor in the same document
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				// If the anchor actually exists…
				if ($hash.length) {
					// …smoothly scroll to it
					$scrollElement.stop().animate({ scrollTop: $hash.offset().top }, speed, function() {
						location.hash = $hash.attr('id');
					});
				}
			}
		});
		// Allow chaining
		return this;
	};
})(jQuery);