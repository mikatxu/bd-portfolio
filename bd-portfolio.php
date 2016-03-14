<?php
/*
Plugin Name: BD Portfolio
Description: Un portfolio custom basé sur Basic JQuery Slider
Version: 0.1
Author: Kaxu
License: GPL2
Text Domain: bd-portfolio
*/

//Include PrettyPhoto
//Adding Latest jQuery from Google
function latest_jquery() {
  wp_deregister_script('jquery');
  wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", false, null);
  wp_enqueue_script('jquery');
}
add_action('init', 'latest_jquery');
//Setup
define('BDP_WPP_PLUGIN_PATH', WP_PLUGIN_URL . '/' . plugin_basename( dirname(__FILE__) ) . '/' );
// // Adding plugin javascript active file
// wp_enqueue_script('bdp-pp-plugin', BDP_WPP_PLUGIN_PATH.'prettyPhoto/jquery.prettyPhoto.js', array('jquery'));
// wp_enqueue_script('bdp-custom-pp-plugin', BDP_WPP_PLUGIN_PATH.'prettyPhoto/customprettyPhoto.js', array('jquery'));
// wp_enqueue_style('prettyPhoto', BDP_WPP_PLUGIN_PATH.'/prettyPhoto/css/prettyPhoto.css');
// wp_enqueue_script('bjqs-js', BDP_WPP_PLUGIN_PATH.'js/bjqs-1.3.js', array('jquery'));
wp_enqueue_script('bdp-js', BDP_WPP_PLUGIN_PATH.'js/bd-portfolio.js', array('jquery'));

//Include admin
include dirname( __FILE__ ) .'/bd-portfolio-admin.php';

//Require portfolio custom type
require_once dirname( __FILE__ ) .'/bd-portfolio-custom-type.php';

//Require portfolio shortcodes
require_once dirname( __FILE__ ) .'/bd-portfolio-shortcodes.php';

//Enqueue plugin CSS
wp_enqueue_style( 'bd-portfolio-css', plugins_url( '/css/bd-portfolio.css', __FILE__ ) );
// wp_enqueue_style( 'bjqs-css', plugins_url( '/css/bjqs.css', __FILE__ ) );

//Output all portfolio names + shortcode
function portfolio_categories_func ( $atts ) {
  $all_pf_names = array();
  query_posts( array( 'post_type' => 'bd_portfolio' ) );
  if ( have_posts() ) : while ( have_posts() ) : the_post();
  foreach((get_the_category()) as $category) { $all_pf_names[] = $category->cat_name; }
  endwhile;
  endif;
  wp_reset_query();
  $unique_pf_names = array_unique($all_pf_names);
  sort($unique_pf_names);
  foreach ($unique_pf_names as $pf_name) {
  echo $pf_name . ' ';
  }
}
add_shortcode( 'portfolio-names', 'portfolio_categories_func' );
