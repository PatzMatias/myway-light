$(document).ready(function() {


 	// $(window).bind('scroll',function(e){	
 	// 	    	parallaxScroll();
 	// });
	var reduce = 60;


	$('.navlink-item1').click(function(){
	    $('html, body').animate({
    		scrollTop:0
    	}, 1000, 'easeInOutExpo', function() {
	    	 // Callback is required for iOS
		});
    	return false;
	});


	$('.navlink-item2').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#services').offset().top-reduce
    	}, 1000,'easeInOutExpo', function() {
	    	//Callback is required for iOS
		});
    	return false;
	});

	$('.navlink-item3').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#works-top').offset().top-reduce
    	}, 1000, 'easeInOutExpo', function() {
	    	// Callback is required for iOS
		});
    	return false;
	});

	$('.navlink-item4').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#gallery-top').offset().top-reduce
    	}, 1000, 'easeInOutExpo', function() {
	  // Callback is required for iOS
		});
    	return false;
	});

	$('.navlink-item5').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#team-top').offset().top-reduce
    	}, 1000, 'easeInOutExpo', function() {
	    	 // Callback is required for iOS
		});
    	return false;
	});

	$('.navlink-item6').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#contact-top').offset().top-reduce
    	}, 1000, 'easeInOutExpo', function() {
	    	 // Callback is required for iOS
		});
    	return false;
	});

});