;(function(){
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
    var h5Share = function (options) {
        return new H5Share(options);
    };
    if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
        //seajs cmd不支持
        module.exports = h5Share;
    } else if (typeof define === 'function' && define.amd) {
        define(function() { return h5Share; });
    } else {
        this.h5Share = h5Share;
    }
}).call(function () {
    //call 自执行
    return this || (typeof window !== 'undefined' ? window : global);
}())