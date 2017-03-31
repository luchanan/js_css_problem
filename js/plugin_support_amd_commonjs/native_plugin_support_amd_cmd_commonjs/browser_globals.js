;(function (root, factory) {
    if(typeof define === 'function' && (define.amd || define.cmd)){
        // requirejs amd,seajs cmd支持
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
    return function (options) {
        return new H5Share(options);
    };
})