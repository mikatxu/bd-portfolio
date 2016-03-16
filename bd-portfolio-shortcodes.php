<?php

// Open and close portfolio
function bd_portfolio_open_func ( $atts ) {
  return '<div id="bd-portfolio-overlay">
  <div class="bd-portfolio-container">';
  }
add_shortcode( 'bd-portfolio-open', 'bd_portfolio_open_func' );

function bd_portfolio_content_func ( $atts ) {
  return '<div id="slider">
  <a href="#" class="more-info"></a>
  <a href="#" class="close"></a>
  <a href="#" class="control_next"></a>
  <a href="#" class="control_prev"></a>
  <ul>';
  }
add_shortcode( 'bd-portfolio-content', 'bd_portfolio_content_func' );

function bd_portfolio_content_end_func ( $atts ) {
  return '</ul>';
  }
add_shortcode( 'bd-portfolio-content-end', 'bd_portfolio_content_end_func' );

function bd_portfolio_close_func ( $atts ) {
  return '</ul>
  </div>
  </div>
  </div>';
  }
add_shortcode( 'bd-portfolio-close', 'bd_portfolio_close_func' );

// Overlay info
function bd_portfolio_overlay_info_func ( $atts, $content = null  ) {
return '<div id="overlay-info" class="overlay-info-hidden">
<div class="overlay-info-content">' . $content . '</div></div>';
}
add_shortcode( 'bd-portfolio-more-info', 'bd_portfolio_overlay_info_func' );
// Output portfolio image
function bd_portfolio_image( $atts, $content = null ) {
  $xpath = new DOMXPath(@DOMDocument::loadHTML($content));
  $src = $xpath->evaluate("string(// img/@src)");
  $strippedsrc = preg_replace('#-[0-9]{3,4}x[0-9]{3,4}.jpg$#','.jpg',$src);
  list($image_width, $image_height) = getimagesize($strippedsrc);
  if ($image_width > $image_height) {
    $image_class = 'bdp-landscape';
  }
  else {
    $image_class= 'bdp-portrait';
  }
  return '<li class="bdp-non-text-slide"><img src="'. $strippedsrc . '" class="bd-portfolio-image '.$image_class.'" alt=""/></li>';
}
add_shortcode( 'bd-portfolio-image', 'bd_portfolio_image' );

// Output portfolio text
function bd_portfolio_text( $atts, $content = null ) {
  $stripped_content = preg_replace('#(.*)#','$1',$content);
  return '<li class="bdp-text-slide">
  <div class="bdp-text">' . $content . '</div></li>';
}
add_shortcode( 'bd-portfolio-text', 'bd_portfolio_text' );

// Output Youtube video
function bd_portfolio_youtube( $atts, $content = null ) {
  $src = preg_replace('#youtube.com/embed/(.*)\?feature=oembed#','youtube.com/embed/$1?feature=oembed&version=3&enablejsapi=1',$content);
  return '<li class="bdp-non-text-slide">'.$src.'</li>';
}
add_shortcode( 'bd-portfolio-youtube', 'bd_portfolio_youtube' );

// Output Vimeo video
function bd_portfolio_vimeo( $atts, $content = null ) {
$src = preg_replace('#<iframe src="https://player.vimeo.com/video/([0-9]{8,12})#','<iframe class="bdp-vimeo" src="https:// player.vimeo.com/video/$1?api=1&player_id=' . $content_id . '',$content);
return '<li class="bdp-non-text-slide">'.$content.'</li>';
}
add_shortcode( 'bd-portfolio-vimeo', 'bd_portfolio_vimeo' );

// Output the titles of portfolios who are in the same category
function bd_portfolio_samecat( $atts ) {
 global $post;
 $all_titles = array();
 $category = get_the_category();
 $current_category = $category[0]->cat_name;
 $current_catID = get_cat_ID( $current_category );
 $current_title = get_the_title();
 $myposts = get_posts( array( 'post_type' => 'bd_portfolio', 'cat' => $current_catID ));
 foreach( $myposts as $post ) :	setup_postdata($post);
 $title = get_the_title();
 if ($title != $current_title) :
 $all_titles[] = get_the_title();
 endif;
 endforeach;
 foreach ($all_titles as $title) :
   return '<p>' . $title . '</p>';
 endforeach;
}
add_shortcode( 'bd-portfolio-samecategory', 'bd_portfolio_samecat' );
