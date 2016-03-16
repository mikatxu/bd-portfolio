<?php
/*
Plugin Name: BD Portfolio
Description: A slider in a WordPress plugin tailored for an architect.
Version: 1.0
Author: Kaxu
License: GPL2
Text Domain: bd-portfolio
*/

// Add settings page


//Adding Latest jQuery from Google
function latest_jquery() {
  wp_deregister_script('jquery');
  wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", false, null);
  wp_enqueue_script('jquery');
}
add_action('init', 'latest_jquery');

//Setup
define('BDP_WPP_PLUGIN_PATH', WP_PLUGIN_URL . '/' . plugin_basename( dirname(__FILE__) ) . '/' );

//Add plugin javascript file
wp_enqueue_script('bdp-js', BDP_WPP_PLUGIN_PATH.'js/bd-portfolio.js', array('jquery'));

//Add Vimeo frogaloop file
wp_enqueue_script('froogaloop', BDP_WPP_PLUGIN_PATH.'js/froogaloop.js', array('jquery'));

//Require portfolio custom type
require_once dirname( __FILE__ ) .'/bd-portfolio-custom-type.php';

//Require portfolio shortcodes
require_once dirname( __FILE__ ) .'/bd-portfolio-shortcodes.php';

//Enqueue plugin CSS
wp_enqueue_style( 'bd-portfolio-css', plugins_url( '/css/bd-portfolio.css', __FILE__ ) );

//Strip portfolio page content of unnecessary tags
add_filter('the_content', 'bdp_strip_tags', 12);
function bdp_strip_tags ($content)
{
   global $post;
	  $pattern = "#<br />+#i";
    $replacement = '';
    $content = preg_replace($pattern, $replacement, $content);
    return $content;
}
