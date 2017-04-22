//= jquery-1.12.4.min.js

$(document).ready(function(){
  $('body').removeClass('no-js');

  var mainMenu = $('#mainMenu');
  var navButton = $('#navButton');

  navButton.click(function() {
		$(this).toggleClass('open');
		mainMenu.toggleClass('opened');
	});

  $(window).on('resize', function() {
    var windowWidth = $(window).width();

    if (windowWidth > 600 && mainMenu.hasClass('opened')) {
      navButton.removeClass('open');
      mainMenu.removeClass('opened');
    }
  });
});
