<?php

//Add portfolio custom type
add_action( 'init', 'bd_portfolio_init' );

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
		'rewrite'            => array( 'slug' => 'bd-portfolio' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
    'taxonomies' 				 => array('category'),
		'supports'           => array( 'title', 'editor'),
    'taxonomies' 				 => array('category'),
		'supports'           => array( 'title', 'editor' )
	);

	register_post_type( 'bd_portfolio', $args );
}
