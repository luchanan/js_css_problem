;(function (global) {
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
    if (typeof module !== 'undefinded' && typeof exports === 'object') {
        // commonjs
        module.exports = h5Share;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        // amd or cmd
        define(function () {
            return h5Share;
        })
    } else {
        // global
        global.h5Share = h5Share;
    }
})(typeof self !== 'undefined' ? self
    : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
            : this
)