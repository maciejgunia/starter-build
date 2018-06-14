<?php

/**
 * enqueue custom scripts
 */

wp_enqueue_style( 'weback-style-custom', get_template_directory_uri() . get_file_hash('main.css') , array(), null, 'all' );
wp_enqueue_script( 'weback-script-custom', get_template_directory_uri() . get_file_hash('main.js') , array(), null, true );

/**
 * generate hashed assets filenames
 */
function get_file_hash( $file ) {

    $map = get_template_directory() . '/custom/manifest.json';
    static $hash = null;

    if ( null === $hash ) {
        $hash = file_exists( $map ) ? json_decode( file_get_contents( $map ), true ) : [];
    }

    if ( array_key_exists( $file, $hash ) ) {
        return( '/custom/' . $hash[ $file ] );
    }

    return $file;

}