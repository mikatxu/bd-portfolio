// the ready and resize sections have basically the same elements
// make sure you modify both

jQuery(document).ready(function ($) {

// Initialize values used for calculating the slider width

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
  var bdp_height = Math.floor($(window).height() * 0.8);
  var bdp_width = Math.floor($(window).width() * 0.8);
// Bad value name, height used as default for overlay square size
  if (bdp_width < bdp_height) { bdp_height = bdp_width; }

// Left and top margin calculation
  var bdp_left = ($(window).width() - bdp_height) / 2;
  var bdp_top = Math.floor(($(window).height() - $(window).height()*0.8) / 2);

// Transmission of the values to the slider, the links div, the overlay div
// Slide width value update
  $('#bdp-slider ul li').height(bdp_height).width(bdp_height);
  $('#bdp-overlay-info').height(bdp_height).width(bdp_height).css('top', bdp_top - 25).css('left', bdp_left);
  $('div#bd-portfolio-links').css('width', bdp_height);
  $("iframe[src='www.youtube.com']​​​​​​​​​​​​​​​​").width(bdp_height);
  $('#bdp-slider').css('top', bdp_top - 25);
  $('#bdp-slider ul li.bdp-non-text-slide').css('line-height', bdp_height + 'px');

  updateslideWidth();

	$('#bdp-slider').css({ width: slideWidth, height: slideHeight + 50 });
	$('#bdp-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('#bdp-slider ul li:last-child').prependTo('#bdp-slider ul');
  $("#bdp-slider ul li.bdp-video-slide").css('line-height', bdp_height + 25 + 'px');

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
      $('div#bdp-overlay-info').css('visibility','visible').hide().fadeIn(200);
    };

    function hidemoreInfo() {
      $('div#bdp-overlay-info').fadeOut(200);
      $('div#bdp-overlay-info').addClass('bdp-overlay-info-hidden');
    };

    $('a.more-info').click(function() {
      if ($('div#bdp-overlay-info').hasClass('bdp-overlay-info-hidden')) {
        showmoreInfo();
        $('div#bdp-overlay-info').removeClass('bdp-overlay-info-hidden').addClass('overlay-info-visible');
        $('a.more-info').addClass('bdp-rotate');
      }
      else {
        hidemoreInfo();
        $('.bdp-rotate').removeClass('bdp-rotate');
      }
    });

// Hide more info link if there is no content
if( $('#bdp-overlay-info').length ) {
  $("a.more-info").css('display','show');
}
else {
    $("a.more-info").hide();
}

// Adding class for youtube iframes
$("iframe[src='www.youtube.com']​​​​​​​​​​​​​​​​").addClass("bdp-youtube-iframe");

});

jQuery(window).resize(function() {

  bdp_height = Math.floor($(window).height() * 0.8);
  bdp_width = Math.floor($(window).width() * 0.8);
  if (bdp_width < bdp_height) { bdp_height = bdp_width; }
  function updateslideWidth() {
    slideWidth = $('#bdp-slider ul li').width();
    slideCount = $('#bdp-slider ul li').length;
    sliderUlWidth = slideCount * slideWidth;
  };
  updateslideWidth();
  slideWidth = bdp_height;
  bdp_top = Math.floor(($(window).height() - $(window).height()*0.8) / 2);
  bdp_marginleft = parseInt($("#bdp-slider ul").css("margin-left"), 10);
  bdp_arrondi = (Math.round(bdp_marginleft / bdp_height)*100)/100;
  bdp_newmarginleft = bdp_arrondi * bdp_height;
  bdp_left = ($(window).width() - bdp_height) / 2;
  $("#bdp-slider ul li").height(bdp_height).width(bdp_height);
  $('#bdp-overlay-info').height(bdp_height).width(bdp_height).css('top', bdp_top - 25).css('left', bdp_left);
  $("#bdp-slider ul li.bdp-non-text-slide").css('line-height', bdp_height + 'px');
  $("div#bd-portfolio-links").css('width', bdp_height);
  $("#bdp-slider").height(bdp_height + 50).width(bdp_height);
  $("#bdp-slider ul").css('margin-left', bdp_newmarginleft);
  $("#bdp-slider ul li.bdp-video-slide").css('line-height', bdp_height + 25 + 'px');
});
