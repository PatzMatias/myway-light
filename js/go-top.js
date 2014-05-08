var opacity = 0.05;
var lastScroll=0;
$(window).scroll(function(){
		 var st = $(this).scrollTop();

		 if(st==0){
		 	$('.navbar-default').css('background-color','rgba(0,0,0,0)');
		 }

		 else if(opacity<1 || st>lastScroll){
		 	$('.navbar-default').css('background-color','rgba(255,255,255,'+opacity+')');
		 	opacity=opacity+0.05;
		 }
		 else if(st<lastScroll){
		 	$('.navbar-default').css('background-color','rgba(255,255,255,'+opacity+')');
		 	opacity=opacity-0.05;
		 }
		lastScroll=st;
	});

