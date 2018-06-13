<?php
    wp_enqueue_style( 'twentyseventeen-style', get_stylesheet_directory_uri() . '/' . get_file_hash( 'main.css' ), array(), null );
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/' . get_file_hash( 'main.js' ), array(), null );

    function get_file_hash( $file ) {

        $map = ABSPATH . '../dist/manifest.json';
        static $hash = null;
    
        if ( null === $hash ) {
            $hash = file_exists( $map ) ? json_decode( file_get_contents( $map ), true ) : [];
        }
    
        if ( array_key_exists( $file, $hash ) ) {
            return('/dist/css/' . $hash[ $file ]);
        }
    
        return $file;
    
    }