// 参考：
// https://github.com/umdjs/umd
// http://web.jobbole.com/82238/
// http://ifandelse.com/its-not-hard-making-your-library-support-amd-and-commonjs/
// 不依赖其他module的插件封装--nativejs
;(function (root, factory) {
    if(typeof define === "function" && define.amd) {
        // amd
        define([], factory);
    } else if(typeof module === "object" && module.exports) {
        // node或非严格模式的commonjs  但是 seajs的cmd不支持
        module.exports = factory();
    } else {
        // h5Share为module名字
        root.h5Share = factory();
    }
})(this, function () {
    function H5Share(options) {
        this.id = options.id || 'openShare'
    }
    H5Share.prototype={
        init:function () {
            console.log(this.id);
        },
        open:function () {
            console.log("open");
        }
    }
    // 一、返回一个的时候
    // 方法一
    /*function initialize(options) {
     return new H5Share(options);
     }
     return initialize;*/
    // 方法二
    return function (options) {
        return new H5Share(options);
    };
})

