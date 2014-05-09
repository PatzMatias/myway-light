// version 1 - class calling
// $(".navigate").click(function(event){
//     event.preventDefault();
//     //determine location of section
//     var section = 0;
//     var link = $(this.hash).offset.top;
//     var reduce=60;
//     if(link > $(document).height()-$(window).height()){
//       section = $(document).height()-$(window).height();
//     }

//     else{
//          section = $(this.hash).offset().top;
//     }
    
//      //go to section's location
//     $('body').animate({scrollTop:section - reduce},1000,'easeInOutExpo');
// });

  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top-60}, 1000,'easeInOutExpo');
        return false;
      }
    }
  });
});