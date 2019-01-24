/** 
 *	Theme Name: Starter Project
 *	Theme URI: https://github.com/ashrafuloli/Starter-Project-Gulp
 *	Author: ashrafuloli
 *	Author URI: https://ashrafuloli.com/
 *	Description: Starter Template is multipurpose theme based template. Its built with all modern approaches such as Bootstrap 4.1.3, Sass, Node js & Gulp js. Its simple & smart. Its perfect for any Startup Business, Companies, Agencies which need a professional way to showcase their projects and services.
 *	Tags: Starter Project, Quick Start
 *	Version: 1.0.0
 */

/* ======= TABLE OF CONTENTS ================================== 

    # Detect IE version
    # Detect IOS Mobile device
    # Detect Safari version
    # Back to Top
    # Preloader
    # Full height element
    # Tooltip
    # Scroll Reveal

========================================================= */

jQuery(function ($) {

    'use strict';
    
    /* === Detect IE version === */
    (function () {
        function getIEVersion() {
            var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
            return match ? parseInt(match[1], 10) : false;
        }

        if (getIEVersion()) {
            $('html').addClass('ie' + getIEVersion());
        }
    }());
    
    /* === Detect IOS Mobile device === */
    (function () {
        if (navigator.userAgent.match(/iP(hone|od|ad)/i)) {
            jQuery('html').addClass('ios-browser');
        }
    }());
    
    /* === Detect Safari version === */
    (function () {
        var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
        if (isSafari) {
            $('html').addClass('isSafari');
        }
    }());

    /* ======= Back to Top ======= */
    (function () {
        $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() !== 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
        $('#toTop').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    }());
    
    /* ======= Preloader ======= */
    (function () {
        $(window).on('load', function () {
            $('#status').fadeOut();
            $('#preloader').delay(200).fadeOut('slow');
        });
    }());


    /* ======= Full height element ======= */
    (function () {
        $(".fullHeight").height($(window).height());
        $(window).resize(function () {
            $(".fullHeight").height($(window).height());
        });
    }());
    
    
    /* === Tooltip === */
    (function () {
        $('[data-toggle="tooltip"]').tooltip();
    }());


    // Scroll Reveal
    window.sr = ScrollReveal() ,
    sr.reveal('h1', {
        delay: 1000,
        duration: 200,
        origin: 'bottom',
        distance: '100px' 
    });


    /* ======= plugin name ======= */
    // if ($('.plugin').length > 0) {
    // }

}); 