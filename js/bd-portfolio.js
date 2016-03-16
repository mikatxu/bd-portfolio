// the ready and resize sections have basically the same elements
// make sure you modify both

jQuery(document).ready(function ($) {

// Init values used for calculating the slider width

  var slideWidth = 1;
  var slideCount = 1;
  var sliderUlWidth = 1;
  var slideHeight = 1;

  function updateslideWidth() {
    slideWidth = $('#bdp-slider ul li').width();
    slideHeight = $('#bdp-slider ul li').height();
    slideCount = $('#bdp-slider ul li').length;
    sliderUlWidth = slideCount * slideWidth;
  };

// Height and width calculation according to the window
  var height = Math.floor($(window).height() * 0.8);
  var width = Math.floor($(window).width() * 0.8);
// Bad value name, height used as default for overlay square size
  if (width < height) { height = width; }

// Left and top margin calculation
  var left = ($(window).width() - height) / 2;
  var top = Math.floor(($(window).height() - $(window).height()*0.8) / 2);

// Transmission of the values to the slider, the links div, the overlay div
// Slide width value update
  $('#bdp-slider ul li').height(height).width(height);
  $('#overlay-info').height(height).width(height).css('top', top).css('left', left);
  $("div#bd-portfolio-links").css('width', height - 100);
  $('#bdp-slider').height(height).width(width);
  $("#bdp-slider").css('top', top);
  $("#bdp-slider ul li.bdp-non-text-slide").css('line-height', height + 'px');

  updateslideWidth();

	$('#bdp-slider').css({ width: slideWidth, height: slideHeight });
	$('#bdp-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('#bdp-slider ul li:last-child').prependTo('#bdp-slider ul');

// Slider animation, stopping videos on change
    function moveLeft() {
        $('#bdp-slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#bdp-slider ul li:last-child').prependTo('#bdp-slider ul');
            $('#bdp-slider ul').css('left', '');
        });
        Froogaloop( jQuery('iframe')[0] ).api('pause');
        $('iframe').each(function(){
          this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
        });
    };

    function moveRight() {
        $('#bdp-slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#bdp-slider ul li:first-child').appendTo('#bdp-slider ul');
            $('#bdp-slider ul').css('left', '');
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

// Info overlay div animation
    function showmoreInfo() {
      $('div#overlay-info').css('visibility','visible').hide().fadeIn(200);
    };

    function hidemoreInfo() {
      $('div#overlay-info').fadeOut(200);
      $('div#overlay-info').addClass('overlay-info-hidden');
    };

    $('a.more-info').click(function() {
      if ($('div#overlay-info').hasClass('overlay-info-hidden')) {
        showmoreInfo();
        $('div#overlay-info').removeClass('overlay-info-hidden').addClass('overlay-info-visible');
        $('a.more-info').addClass('rotate');
      }
      else {
        hidemoreInfo();
        $('.rotate').removeClass('rotate');
      }
    });

// Hide more info link if there is no content
if( $('#overlay-info').length ) {
  $("a.more-info").css('display','show');
}
else {
    $("a.more-info").hide();
}

});

jQuery(window).resize(function() {

  slideWidth = $('#bdp-slider ul li').width();
  height = Math.floor($(window).height() * 0.8);
  width = Math.floor($(window).width() * 0.8);
  if (width < height) { height = width; }
  function updateslideWidth() {
    slideWidth = $('#bdp-slider ul li').width();
    slideCount = $('#bdp-slider ul li').length;
    sliderUlWidth = slideCount * slideWidth;
  };
  updateslideWidth();
  slideWidth = height;
  top = Math.floor(($(window).height() - $(window).height()*0.8) / 2);
  marginleft = parseInt($("#bdp-slider ul").css("margin-left"), 10);
  arrondi = (Math.round(marginleft / height)*100)/100;
  newmarginleft = arrondi * height;
  left = ($(window).width() - height) / 2;
  $("#bdp-slider ul li").height(height).width(height);
  $('#overlay-info').height(height).width(height).css('top', top).css('left', left);
  $("#bdp-slider ul li.bdp-non-text-slide").css('line-height', height + 'px');
  $("div#bd-portfolio-links").css('width', (height - 100));
  $("#bdp-slider").height(height).width(height);
  $("#bdp-slider ul").css('margin-left', newmarginleft);
});
