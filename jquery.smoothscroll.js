/*!
 * Smooth Scrolling jQuery Plugin v1.0
 * @link http://github.com/mathiasbynens/Smooth-Scrolling-jQuery-Plugin
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
;(function($) {
 $.fn.smoothScroll = function(settings) {
  // Specify default settings
  var config = {
   speed: 400 // 'normal'
  };
  // Use custom settings, if any
  if (settings) {
   $.extend(config, settings);
  };
  // Look for links to anchors (on any page)
  $(this).find('a[href*=#]').click(function() {
   // If it’s a link to an anchor in the same document
   if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    // Get the in-document element the link points to…
    var $hash = $(this.hash);
    // …and if it exists…
    if ($hash.length) {
     // …smoothly scroll to it
     $('html, body').animate({ scrollTop: $hash.offset().top }, config.speed);
     // Don’t jump to the link right away
     return false;
    };
   };
  });
  // Allow chaining
  return this;
 };
})(jQuery);