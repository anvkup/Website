// $(function(){
//     $(window).scroll(function(){
//       var winTop = $(window).scrollTop();
//       if(winTop >= 30){
//         $("body").addClass("sticky-header");
//       }else{
//         $("body").removeClass("sticky-header");
//       }//if-else
//     });//win func.
//   });//ready func.

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})