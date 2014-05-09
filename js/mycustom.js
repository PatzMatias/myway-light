$(document).ready(function(){
	'use strict';

//Window Resize
	$(function(){
		$('#intro .item').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro .item').css({'height':($(window).height())+'px'});
		});
	});

//Smooth Anchor Navigation
//
$("a[href*=#]:not([href=#])").click(function(event){
    event.preventDefault();
    //determine location of section
    var section = 0;
    var link = $(this.hash).offset.top;
    var reduce=60;
    var currentlocation=$(document).height()-$(window).height();
    if(link > currentlocation){
      section = currentlocation;
    }
    else{
         section = link;
    }
    
     //go to section's location
    $('body').stop().animate({scrollTop:section - reduce},1000,'easeInOutExpo');
});



//intro text slider
	$('#carousel_fade_intro').carousel({
		interval: 2500,
		pause: "false"
	});

//works sliders
//
	$('#carousel-1, #carousel-2, #carousel-3').carousel({
		interval: false
	})

//SVG Font Icons
	var url ='svg/streamline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='svgsimpleline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='svg/social-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)



//loading screen
	$('.spinner').fadeOut('slow');
	$('.preloader').delay(350).fadeOut('slow');


//google map
	$(".gmap").gMap({
		controls: false,
		scrollwheel: false,
		draggable: true,
		markers: [{ latitude: 45.256,
					longitude: 19.845
				}],
		icon: { image: "img/map-pin.png",
				iconsize: [32, 48],
				iconanchor: [16, 24],
				infowindowanchor: [0, 0]
			},
		latitude: 45.256,
		longitude: 19.845,
		zoom: 15
	});

//flowuplabels plug-in initiation
	$('.flowuplabels').FlowupLabels({
		feature_onInitLoad: false, 
		class_focused: 'focused',
		class_populated: 'populated' 
	});

});


//lightbox plug-in integration
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 

$(window).load(function() {
	'use strict';

//prevent hashing on address field
	$('a[href="#"]').click(function() {
		return false;
	});

	if ($('.navbar-toggle:visible').length) {
		$('.navbar a').click(function () {
		 $(".navbar-collapse").collapse("hide") 
		});
	}

//loading screen duration
	$('.spinner').fadeOut('slow');
	$('.preloader').delay(350).fadeOut('slow');


});
