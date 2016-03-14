jQuery(document).ready(function ($) {

  var height = Math.floor($(window).height() * 0.8);
  var width = Math.floor($(window).width() * 0.8);
  if (width < height) { height = width; }
  var top = Math.floor(($(window).height() - $(window).height()*0.8) / 2);
  $('#slider ul li').height(height).width(width);
  $('#slider').height(height).width(width);

  $("#slider").css('top', top);

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
        }, 500, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function updateslideWidth() {
      	var slideWidth = $('#slider ul li').width();
    }

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

jQuery(window).resize(function() {
  var height = Math.floor($(window).height() * 0.8);
  var width = Math.floor($(window).width() * 0.8);
  if (width < height) { height = width; }
  slideWidth = height;
  var top = Math.floor(($(window).height() - $(window).height()*0.8) / 2);
  var marginleft = parseInt($("#slider ul").css("margin-left"), 10);
  var arrondi = (Math.round(marginleft / height)*100)/100;
  var newmarginleft = arrondi * height;
  $("#slider ul li").height(height).width(height);
  $("#slider ul li").css('line-height', height + 'px');
  $("#slider").height(height).width(height);
  $("#slider ul").css('margin-left', newmarginleft);
});
