//adding element manually - because IE
document.createElement("main");

//navbar fixed
const navBar = document.getElementById("nav-bar"),
      headBar = document.getElementById("header");

window.onscroll = function scrollToStick() {
  if (window.pageYOffset > (headBar.clientHeight - navBar.clientHeight)) {  // height of header - height of navbar
    navBar.classList.add("sticky-dark");
  } else {
    navBar.classList.remove("sticky-dark");
  }
};

//scroll to top
const toTop = document.getElementById("to-top");

var scrollTimer,
    scrollValue;

const scrollToTop = function(event) {
  event.preventDefault();
  scrollValue = window.scrollY;
  scrollTimer = setInterval(scrollStep, 1);
};

const scrollStep = function() {
  scrollValue -= 30;
  window.scrollTo(0, scrollValue);
  if (scrollValue <= 0 || isNaN(scrollValue)) {
    clearInterval(scrollTimer);
  }
};

toTop.addEventListener("click", scrollToTop);


//JQUERY
jQuery(document).ready(function($) {

//adding .menu class on small devices
  let alterClass = function() {
    let ww = document.body.clientWidth;
    if (ww <= 430) {
      $("#nav-bar").addClass("menu");
    } else if (ww > 430) {
      $("#nav-bar").removeClass("menu");
    }
  };
  $(window).resize(function(){
    alterClass();
  });

  alterClass();

//hamburger
  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});
