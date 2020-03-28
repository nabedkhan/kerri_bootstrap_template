$(document).ready(function(){

	
	// Scroll Bottom to Top  
	$(window).scroll(function() {
    if ($(this).scrollTop() >= 1000) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
		$('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	// Typed JS Plugin
	const typed = new Typed('.hero-content span', {
  	strings: ["Nabed Khan.", "A Graphic Designer.", "A Web Developer."],
  	typeSpeed: 50,
  	backDelay:3000,
  	loop: true
	});

	// owlCarousel JS plugin activation
	$(".client-slider").owlCarousel({
	items:1,
  	loop:true,
  	nav:false,
  	dots:true,
  	autoplay:true
	});

	// isotope filter JS plugin activation
	$(".work-filter-list").isotope();

	$(".work-filter li").on('click', function(){
	    var selector = $(this).attr('data-filter');
	    $(".work-filter-list").isotope({
	        filter:selector
	    });
	});

	// Hover activation JS
	$(".main-menu ul li").on('click', function(){
	    $(".main-menu ul li").removeClass("active");
	    $(this).addClass("active");
	});
	$(".work-filter ul li").on('click', function(){
	    $(".work-filter ul li").removeClass("active");
	    $(this).addClass("active");
	});

	// Smooth Scroll JS activation
	var scroll = new SmoothScroll('a[href*="#"]');

	AOS.init();
});