jQuery(document).ready(function ($) {

  var height = $(window).height() * 0.8;
  $("#slider ul li").height(height).width(height);

  var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

jQuery(window).resize(function() {

  var height = $(window).height() * 0.8;
  var width = $(window).width() * 0.8;
  console.log('' + width + ' ' + height);
//  if (height < width) { height = width; }
  $("#slider ul li").height(height);
  $("#slider").height(height).width(height);
  var top = ($(window).height() - $(window).height()*0.8) / 2 ;
  console.log(top);
  $("#slider ul").css('top', top);
  $("#slider .close").css('top', top):
});
