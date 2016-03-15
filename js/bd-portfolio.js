jQuery(document).ready(function ($) {

  var slideWidth = 1;
  var slideCount = 1;
  var sliderUlWidth = 1;
  var slideHeight = 1;

  function updateslideWidth() {
    slideWidth = $('#slider ul li').width();
    slideHeight = $('#slider ul li').height();
    slideCount = $('#slider ul li').length;
    sliderUlWidth = slideCount * slideWidth;
  }

  var height = Math.floor($(window).height() * 0.8);
  var width = Math.floor($(window).width() * 0.8);
  if (width < height) { height = width; }
  var top = Math.floor(($(window).height() - $(window).height()*0.8) / 2);
  $('#slider ul li').height(height).width(width);
  $('#slider').height(height).width(width);
  $("#slider").css('top', top);
  $("#slider ul li.bdp-non-text-slide").css('line-height', height + 'px');

  updateslideWidth();

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
        Froogaloop( jQuery('iframe')[0] ).api('pause');
        $('iframe').each(function(){
          this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
        });

    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
        Froogaloop( jQuery('iframe')[0] ).api('pause');
        $('iframe').each(function(){
          this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
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
  var slideWidth = $('#slider ul li').width();
  console.log(slideWidth + 'slidewidth mod');
  var height = Math.floor($(window).height() * 0.8);
  var width = Math.floor($(window).width() * 0.8);
  if (width < height) { height = width; }
  function updateslideWidth() {
    slideWidth = $('#slider ul li').width();
    slideCount = $('#slider ul li').length;
    sliderUlWidth = slideCount * slideWidth;
    console.log(slideWidth + 'slidewidth');
  }
  updateslideWidth();
  slideWidth = height;
  var top = Math.floor(($(window).height() - $(window).height()*0.8) / 2);
  var marginleft = parseInt($("#slider ul").css("margin-left"), 10);
  var arrondi = (Math.round(marginleft / height)*100)/100;
  var newmarginleft = arrondi * height;
  $("#slider ul li").height(height).width(height);
  $("#slider ul li.bdp-non-text-slide").css('line-height', height + 'px');
  $("#slider").height(height).width(height);
  $("#slider ul").css('margin-left', newmarginleft);
});
