<?php

//Add portfolio custom type
add_action( 'init', 'bd_portfolio_init' );
/**
 * Register a book post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function bd_portfolio_init() {
	$labels = array(
		'name'               => _x( 'Portfolio', 'post type general name', 'bd-portfolio' ),
		'singular_name'      => _x( 'Portfolio', 'post type singular name', 'bd-portfolio' ),
		'menu_name'          => _x( 'Portfolio', 'admin menu', 'bd-portfolio' ),
		'name_admin_bar'     => _x( 'Portfolio', 'add new on admin bar', 'bd-portfolio' ),
		'add_new'            => _x( 'Add New', 'book', 'bd-portfolio' ),
		'add_new_item'       => __( 'Add New portfolio', 'bd-portfolio' ),
		'new_item'           => __( 'New portfolio ', 'bd-portfolio' ),
		'edit_item'          => __( 'Edit portfolio ', 'bd-portfolio' ),
		'view_item'          => __( 'View portfolio', 'bd-portfolio' ),
		'all_items'          => __( 'All portfolio', 'bd-portfolio' ),
		'search_items'       => __( 'Search portfolio', 'bd-portfolio' ),
		'parent_item_colon'  => __( 'Parent portfolio :', 'bd-portfolio' ),
		'not_found'          => __( 'No portfolio found.', 'bd-portfolio' ),
		'not_found_in_trash' => __( 'No portfolio found in Trash.', 'bd-portfolio' )
	);

	$args = array(
		'labels'             => $labels,
                'description'        => __( 'Description.', 'bd-portfolio' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => '%category%', 'with-front' => false ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
    'taxonomies' 				 => array('category'),
		'supports'           => array( 'title', 'editor', 'thumbnail' ),
		'rewrite' 					 => false
	);

	register_post_type( 'bd_portfolio', $args );
}

// Custom permalink

add_action('init', 'bdp_add_rewrite_rules');

function bdp_add_rewrite_rules()

{
// Register custom rewrite rules
// global $wp_rewrite;
// $wp_rewrite->add_rewrite_tag('%category%', '([^/]+)', 'bd_portfolio=');
// $wp_rewrite->add_permastruct('bdp', '%category%', false);
// }
//
// add_filter('post_type_link', 'bdp_permalinks', 10, 3);
//
// function bdp_permalinks($permalink, $post, $leavename)
// {
// $data = 'mon-truc';
// $post_id = $post->ID;
// if($post->post_type != 'category' || empty($permalink) || in_array($post->post_status, array('draft', 'pending', 'auto-draft')))
// return $permalink;
// $var1 = get_post_meta($post_id, 'category', true);
// $var1 = sanitize_title($var1);
// if(!$var1) { $var1 = $no_data; }
// $permalink = str_replace('%posts_solicitorspeciality%', $var1, $permalink);
// return $permalink;
// }
