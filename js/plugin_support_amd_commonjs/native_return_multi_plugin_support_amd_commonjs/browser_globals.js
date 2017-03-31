;(function (root, factory) {
    if(typeof define === "function" && define.amd) {
        // amd
        define([], factory);
    } else if(typeof module === "object" && module.exports) {
        // node或非严格模式的commonjs
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
    // 二、返回多个的时候
    return {
         a:function (options) {
            return new H5Share(options);
         },
         b:function () {
            console.log('b')
         }
     }
})
