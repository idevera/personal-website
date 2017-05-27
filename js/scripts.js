//Title fades in on load screen
$(window).on('load', function() {
  $("div#header-container").fadeIn(2000).removeClass('hidden');  });

$(document).ready(function(){
  //Contact at bottom mouseover effect
  $("ul li a").mouseover(function () {
      $("ul li a").not($(this)).addClass('hover');
  });
  //Contact at bottome mouseout effect
  $("ul li a").mouseout(function () {
      $("ul li a").not($(this)).removeClass('hover');
  });
});

  // var $animation_elements = $('.animation-element');
  // var $window = $(window);
