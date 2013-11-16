// Generated by CoffeeScript 1.4.0

/*
#
# Jiboneus.js
#
*/


(function() {
  "use strict";

  var scrollCheck;

  if (!window.console) {
    window.console = {
      log: function() {}
    };
  }

  $(document).ready(function() {
    var bla;
    bla = $("#heroTitle");
    console.log(bla.length);
    if (bla.length !== 0) {
      console.log("do scroll check");
      return $(window).scroll(function() {
        return scrollCheck();
      });
    } else {
      console.log("dont do scroll check");
      return $('.top-bar-container').addClass("top-bar-container-white");
    }
  });

  scrollCheck = function() {
    var div_top, window_top;
    window_top = $(window).scrollTop();
    div_top = $("#heroTitle").offset().top;
    if (window_top > div_top) {
      return $('.top-bar-container').addClass("top-bar-container-white");
    } else {
      return $('.top-bar-container').removeClass("top-bar-container-white");
    }
  };

  /*
      var window_top = $(window).scrollTop();
  		var div_top = $("#sticky-anchor").offset().top;
  		var div_bottom = $("#sticky-bottom").offset().top;
  		
  		if(window_top > div_top && window_top < div_bottom) {
  			$('#sticky').addClass('stick');
  		} else {
  			$('#sticky').removeClass('stick');
  		}
  */


}).call(this);
