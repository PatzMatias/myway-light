$(document).ready(function() {
	'use strict';

	$(function(){
		$('#intro .item').css({'height':($(window).height())+'px','width':($(window).width())+'px'});
		$(window).resize(function(){
		$('#intro .item').css({'height':($(window).height())+'px','width':($(window).width())+'px'});
		});
	});

	if ($('.navbar-toggle:visible').length) {
		$('.navbar a').click(function () { $(".navbar-collapse").collapse("hide") });
	}

//intro slliders
	$('#carousel_fade_intro').carousel({
		interval: 2500,
		pause: "false"
	})
//works sliders
	$('#carousel-1, #carousel-2 #carousel-3').carousel({
		interval: false
	})

/* ==== 7) SVG FTW! ==== */

	var url ='css/streamline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='css/simpleline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='css/social-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)
});

