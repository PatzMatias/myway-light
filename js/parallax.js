// $(document).ready(function() {


//  	// $(window).bind('scroll',function(e){	
//  	// 	    	parallaxScroll();
//  	// });
// 	var reduce = 60;

// 	$('.navlink-item1').click(function(){
// 	    $('body').animate({
//     		scrollTop: 0
//     	}, 1000, 'easeInOutExpo', function() {
// 	    	 // Callback is required for iOS
// 		});
//     	return false;
// 	});


// 	$('.navlink-item2').click(function(){
//     	$('body').animate({
//     		scrollTop:$('#services').offset().top-reduce
//     	}, 1000,'easeInOutExpo', function() {
// 	    	//Callback is required for iOS
// 		});
//     	return false;
// 	});

// 	$('.navlink-item3').click(function(){
//     	$('body').animate({
//     		scrollTop:$('#works-top').offset().top-reduce
//     	}, 1000, 'easeInOutExpo', function() {
// 	    	// Callback is required for iOS
// 		});
//     	return false;
// 	});

// 	$('.navlink-item4').click(function(){
//     	$('body').animate({
//     		scrollTop:$('#gallery-top').offset().top-reduce
//     	}, 1000, 'easeInOutExpo', function() {
// 	  // Callback is required for iOS
// 		});
//     	return false;
// 	});

// 	$('.navlink-item5').click(function(){
//     	$('body').animate({
//     		scrollTop:$('#team-top').offset().top-reduce
//     	}, 1000, 'easeInOutExpo', function() {
// 	    	 // Callback is required for iOS
// 		});
//     	return false;
// 	});

// 	$('.navlink-item6').click(function(){
//     	$('body').animate({
//     		scrollTop:$('#contact-top').offset().top-reduce
//     	}, 1000, 'easeInOutExpo', function() {
// 	    	 // Callback is required for iOS
// 		});
//     	return false;
// 	});

// });


$(".navigate").click(function(event){
    event.preventDefault();
    //determine location of section
    var section = 0;
    var link = $(this.hash).offset.top;
    var reduce=60;
    if(link > $(document).height()-$(window).height()){
      section = $(document).height()-$(window).height();
    }

    else{
         section = $(this.hash).offset().top;
    }
    
     //go to section's location
    $('body').animate({scrollTop:section - reduce},1000,'easeInOutExpo');
});