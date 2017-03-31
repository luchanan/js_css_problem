// 非adm commonjs
/*(function($) {
    $.fn.h5Share = function( options ) {
        var settings = $.extend({
            color         : 'red'
        }, options);
        //return 返回使得jquery可以链式调用
        // this.each应用于多个dom
        return this.each( function() {
            $(this).css("background",settings.color);
        });
    }
}(jQuery));*/

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.h5Share = function( options ) {
        var settings = $.extend({
            color         : 'red'
        }, options);
        //return 返回使得jquery可以链式调用
        // this.each应用于多个dom
        return this.each( function() {
            $(this).css("background",settings.color);
        });
    }
}));