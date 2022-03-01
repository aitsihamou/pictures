// == menu toggle small device 
$(function () {
  $('.dropbtn').on('click', function () {
    $('.menu').slideToggle();
  });
});
//=====end 
// adapt the section height with the screen
$(function () {
  if($(window).height() > 991 ){
    $('.slider').height($(window).height() - ( ($('.header').innerHeight())));
  }
});