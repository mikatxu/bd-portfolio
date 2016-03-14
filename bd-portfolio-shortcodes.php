<?php

//Open and close portfolio
function bd_portfolio_start_func ( $atts ) {
  return '<div id="bd-portfolio-overlay">
  <div class="bd-portfolio-container">
  <div id="slider">
  <a href="#" class="more_info">+</a>
  <a href="#" class="close">X</a>
  <a href="#" class="control_next">></a>
  <a href="#" class="control_prev"><</a>
  <ul>
    <li>SLIDE 1</li>
    <li style="background: #aaa;">SLIDE 2</li>
    <li>SLIDE 3</li>
    <li style="background: #aaa;">SLIDE 4</li>
  </ul>
</div>
</div>
</div>';
  }

add_shortcode( 'bd-portfolio-start', 'bd_portfolio_start_func' );

function bd_portfolio_close_func ( $atts ) {
  return '</ul>
  </div>';
  }

add_shortcode( 'bd-portfolio-close', 'bd_portfolio_close_func' );

//Output portfolio image
function bd_portfolio_image( $atts, $content = null ) {
  $xpath = new DOMXPath(@DOMDocument::loadHTML($content));
  $src = $xpath->evaluate("string(//img/@src)");
  $strippedsrc = preg_replace('#-[0-9]{3,4}x[0-9]{3,4}.jpg$#','.jpg',$src);
  return '<a href="' . $strippedsrc . '"><img src="'. $strippedsrc . '" alt=""/></a>';
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
function bd_portfolio_video( $atts, $content = null ) {
  $xpath = new DOMXPath(@DOMDocument::loadHTML($content));
  $src = $xpath->evaluate("string(//iframe/@src)");
  $strippedsrc = preg_replace('#player.vimeo.com/video#','vimeo.com',$src);
  return '<a href="' . $strippedsrc . '?height=70%" class="prettyPhoto" rel="prettyPhoto[gal]"></a>';
}
add_shortcode( 'bd-portfolio-video', 'bd_portfolio_video' );
