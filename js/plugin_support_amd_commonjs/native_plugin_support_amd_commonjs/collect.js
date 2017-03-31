//http://web.jobbole.com/82238/
//http://ifandelse.com/its-not-hard-making-your-library-support-amd-and-commonjs/
//https://github.com/umdjs/umd
// 见过的写法


//      ;(function(factory){
//        if(typeof define === 'function' && define.amd){ // AMD
//          // you may need to change `define([------>'jquery'<------], factory)`
//          // if you use zepto, change it rely name, such as `define(['zepto'], factory)`
//          define(['jquery'], factory)
//          // define(['zepto'], factory)
//        }else{ // Global
//          factory(window.jQuery || window.Zepto)
//        }
//      })(function($,undefined){})


//      (function (root, factory) {
//        if (typeof define === "function" && define.amd) {
//// AMD
//          define(["jquery"], factory);
//        } else if (typeof exports === "object") {
//// Node, CommonJS之类的
//          module.exports = factory(require("jquery"));
//        } else {
//// 浏览器全局变量(root 即 window)
//          root.returnExports = factory(root.jQuery);
//        }
//      }(this, function ($) {
//        // 方法
//        function test(){};
//
//        // 暴露公共方法
//        return test;
//      }));


