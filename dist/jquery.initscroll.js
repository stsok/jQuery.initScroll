/*!
 * jQuery.initScroll.js
 *
 * Copyright 2016, MONSTER DIVE Inc.
 * Released under the MIT license
 *
 * Date: 2016-08-09
 */
(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(require("jquery"), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function ($, window, document, undefined) {
  return $.fn.initScroll = function (options) {
    if (!location.hash) { return this; }

    var $target = $('#' + location.hash.slice(1));

    if (!$target.length) { return this; }

    options = $.extend({
      offset: 0,
      offsetObject: null,
      duration: 600,
      easing: 'swing'
    }, options);

    this.scrollTop(0);

    var offset = (options.offsetObject ? -options.offsetObject.outerHeight() - options.offsetObject.offset().top : 0) + options.offset;

    if (this.velocity) {
      $target.velocity('scroll',
        {
          offset: offset,
          duration: options.duration,
          easing: options.easing
        }
      );

      return this;
    }

    this.animate(
      {
        scrollTop: $target.offset().top + offset
      },
      {
        duration: options.duration,
        easing: options.easing
      }
    );

    return this;
  };
}));
