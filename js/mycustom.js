$(document).ready(function(){
	'use strict';

/*	$(function(){
		$('#intro .item').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro .item').css({'height':($(window).height())+'px'});
		});
	});*/

//intro text slider
//
	$('#carousel_fade_intro').carousel({
		interval: 2500,
		pause: "false"
	});
//works sliders
//
	$('#carousel-1, #carousel-2 #carousel-3').carousel({
		interval: false
	})

//SVG Font Icons

	var url ='css/streamline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='css/simpleline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='css/social-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

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
		icon: { image: "/img/map-pin.png",
				iconsize: [32, 48],
				iconanchor: [16, 24],
				infowindowanchor: [0, 0]
			},
		latitude: 45.256,
		longitude: 19.845,
		zoom: 15
	});
});

