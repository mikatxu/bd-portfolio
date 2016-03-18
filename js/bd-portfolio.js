// the ready and resize sections have basically the same elements
// make sure you modify both

(function($) {

	$(document).ready(documentReadyFunction);
    $(window).resize(windowResizeFunction);

  function documentReadyFunction() {

// Initialize values used so we can set the slider width

  var slideWidth = 1;
  var slideCount = 1;
  var sliderUlWidth = 1;
  var slideHeight = 1;
  var bdp_height = 1;
  var bdp_width = 1;
  var bdp_left = 1;
  var bdp_top = 1;
  var full_height = 1;
  var bdp_yt_height = 1;

  function updateslideWidth() {
    slideWidth = $('#bdp-slider ul li').width();
    slideHeight = $('#bdp-slider ul li').height();
    slideCount = $('#bdp-slider ul li').length;
    sliderUlWidth = slideCount * slideWidth;
  };

// Height and width calculation according to the window
  bdp_height = Math.floor($(window).height() * 0.8);
  bdp_width = Math.floor($(window).width() * 0.8);
// Bad value name, height used as default for overlay square size
  if (bdp_width < bdp_height) { bdp_height = bdp_width; }

// Left and top margin calculation
  bdp_left = ($(window).width() - bdp_height) / 2;
  bdp_top = Math.floor(($(window).height() - $(window).height()*0.8) / 2);
// Transmission of the values to the slider, the links div, the overlay div
// Slide width value update
  $('#bdp-slider ul li').height(bdp_height).width(bdp_height);
  $('#bdp-overlay-info').height(bdp_height).width(bdp_height).css('top', bdp_top - 25).css('left', bdp_left);
  $('div#bd-portfolio-links').css('width', bdp_height);
  bdp_yt_height = $('bdp-youtube-container').width();
  $('#bdp-slider').css('top', bdp_top - 25);
  $('#bdp-slider ul li.bdp-image-slide').css('line-height', bdp_height + 'px');

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

// video iframe height fix
      var max_video_height = bdp_height*(9/16);
      if (max_video_height > bdp_height - 120) {
        max_video_height = bdp_height - 120;
      }
      $('iframe').attr('height', max_video_height);

// youtube iframe content fix
    var v = document.getElementsByClassName("bdp-youtube-video");
    console.log(v.length);
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = '<img class="bd-portfolio-image bdp-yt-thumb" src="//i.ytimg.com/vi/' + v[n].dataset.id + '/hqdefault.jpg"><div class="play-button"></div>';
        p.onclick = youtube_video_clicked;
        v[n].appendChild(p);
    }

    function youtube_video_clicked() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&enablejsapi=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("height", max_video_height);
    this.parentNode.replaceChild(iframe, this);
}

}

function windowResizeFunction() {

  bdp_height = Math.floor( $(window).height() * 0.8);
  bdp_width = Math.floor( $(window).width() * 0.8);
  full_height = $(window).height();
  if (bdp_width < bdp_height) { bdp_height = bdp_width; }
  function updateslideWidth() {
    slideWidth = ('#bdp-slider ul li').width;
    slideCount = ('#bdp-slider ul li').length;
    sliderUlWidth = slideCount * slideWidth;
  };
  updateslideWidth();
  slideWidth = bdp_height;
  bdp_top = Math.floor(( full_height - bdp_height) / 2);
  bdp_marginleft = parseInt($('#bdp-slider ul').css('margin-left'), 10);
  bdp_arrondi = (Math.round(bdp_marginleft / bdp_height)*100)/100;
  bdp_newmarginleft = bdp_arrondi * bdp_height;
  bdp_left = ($(window).width() - bdp_height) / 2;

  // video iframe fix
    var max_video_height = bdp_height*(9/16);
    if (max_video_height > bdp_height - 120) { max_video_height = bdp_height - 120; }
    $('iframe').attr('height', max_video_height);

  $('#bdp-slider ul li').height(bdp_height).width(bdp_height);
  $('#bdp-overlay-info').height(bdp_height).width(bdp_height).css('top', bdp_top - 25).css('left', bdp_left);
  $('#bdp-slider ul li.bdp-image-slide').css('line-height', bdp_height + 'px');
  $('div#bd-portfolio-links').css('width', bdp_height);
  $('#bdp-slider').height(bdp_height + 50).width(bdp_height);
  $('#bdp-slider ul').css('margin-left', bdp_newmarginleft);
  $('#bdp-slider ul li.bdp-video-slide').css('line-height', bdp_height + 25 + 'px');
}

  })(jQuery);
