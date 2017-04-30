//= jquery-1.12.4.min.js
//= parallax.min.js
//= ../libs/kissui.scrollanim/build/scrollanim.min.js

$(document).ready(function(){
  $('body').removeClass('no-js');

  $('header').parallax({imageSrc: 'img/header-bg.jpg'});

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


  var eventImgs = document.getElementsByClassName('events__item-img');
  for (var i = 0; i < eventImgs.length; i++) {
    kissuiScrollAnim.add(eventImgs[i], {
      'in': 'fadeIn'
    });
  }

  // fixed-nav
  function fixNav() {
    if ($(window).scrollTop() >= 45) {
      $('body').addClass('fixed-nav');
    } else {
      $('body').removeClass('fixed-nav');

    }
  }

  $(window).on('scroll', fixNav);




  $(window).on("scroll", onScroll);

  $('.main-menu a').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

        $('.main-menu a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

    var scrollAnchor = $(this).attr('href'),
        nav = $('.top-nav'),
        navHeight = nav.outerHeight(),
        scrollPoint = $(scrollAnchor).offset().top - navHeight;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500, function () {
          // window.location.hash = target;
          $(window).on("scroll", onScroll);
        });
  });

  function onScroll(event){
    var scrollPos = $(window).scrollTop();
    $('.main-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 100 <= scrollPos && refElement.position().top - 100 + refElement.height() > scrollPos) {
            $('.main-menu a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
  }


});

//Mobile menu the footer
// Add event listeners for document click
document.addEventListener('click', tabClick);

// define a func that filters the unwanted click events on the document
function tabClick(e) {
  var elem = e.target,
      elemHREF = elem.getAttribute('href'),
      tabs = document.querySelectorAll('.tabs li a'),
      tabContents = document.querySelectorAll('.footer-menu__column');

  // if we click on elem whose href contains 'tab-', proceed
  if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
    e.preventDefault();

    // if we didn't click an active item, switch tabs
    if (elem.className.indexOf('active') == -1) {
      // remove the active class from the tabs and the visible class from the tab cotents
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        tabContents[i].classList.remove('visible');
      }

      //add the active class to the clicked elem and the visible class to the corresponding tab content
      elem.classList.add('active');
      document.getElementById(elemHREF).classList.add('visible');
    }
  }

}
