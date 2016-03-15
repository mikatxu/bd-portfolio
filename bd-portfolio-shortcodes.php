<?php

//Open and close portfolio
function bd_portfolio_open_func ( $atts ) {
  return '<div id="bd-portfolio-overlay">
  <div class="bd-portfolio-container">
  <div id="slider">
  <a href="#" class="more-info">+</a>
  <a href="#" class="close">X</a>
  <a href="#" class="control_next">></a>
  <a href="#" class="control_prev"><</a>
  <ul>
    <li>SLIDE 1</li>
    <li style="background: #aaa;">SLIDE 2</li>
    <li>SLIDE 3</li>
    <li style="background: #aaa;">SLIDE 4</li>';
  }

add_shortcode( 'bd-portfolio-open', 'bd_portfolio_open_func' );

function bd_portfolio_close_func ( $atts ) {
  return '</ul>
  </div>
  </div>
  </div>';
  }

add_shortcode( 'bd-portfolio-close', 'bd_portfolio_close_func' );

//Output portfolio image
function bd_portfolio_image( $atts, $content = null ) {
  $xpath = new DOMXPath(@DOMDocument::loadHTML($content));
  $src = $xpath->evaluate("string(//img/@src)");
  $strippedsrc = preg_replace('#-[0-9]{3,4}x[0-9]{3,4}.jpg$#','.jpg',$src);
  list($image_width, $image_height) = getimagesize($strippedsrc);
  if ($image_width > $image_height) {
    $image_class = 'bdp-landscape';
  }
  else {
    $image_class= 'bdp-portrait';
  }
  return '<li><img src="'. $strippedsrc . '" class="bd-portfolio-image '.$image_class.'" alt=""/></li>';
}
add_shortcode( 'bd-portfolio-image', 'bd_portfolio_image' );

//Output portfolio text
function bd_portfolio_text( $atts, $content = null ) {
  $content_id = bin2hex(openssl_random_pseudo_bytes(4));
  $stripped_content = preg_replace('#(<p>|<br />)#','',$content);
  return '<a href="#' . $content_id . '"></a>
  <div id="' .$content_id . '" class="hide"> ' . $stripped_content . '</div>';
}
add_shortcode( 'bd-portfolio-text', 'bd_portfolio_text' );

//Output Vimeo video
function bd_portfolio_vimeo( $atts, $content = null ) {
  $content_id = bin2hex(openssl_random_pseudo_bytes(4));
  $src = preg_replace('#<iframe src="https://player.vimeo.com/video/([0-9]{8,12})#','<div id="vimeowrap"><iframe class="bdp-vimeo" src="https://player.vimeo.com/video/$1?api=1&player_id=' . $content_id . '',$content);
  return '<li>'.$src.'</div></li>';
}
add_shortcode( 'bd-portfolio-vimeo', 'bd_portfolio_vimeo' );
