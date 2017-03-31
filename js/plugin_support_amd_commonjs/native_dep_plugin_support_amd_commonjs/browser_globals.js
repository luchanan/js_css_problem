// 依赖 jquery lodash
;(function (root, factory) {
    if(typeof define === "function" && (define.amd || define.cmd)) {
        define(['jquery','lodash'], factory);
    } else if(typeof module === "object" && module.exports) {
        module.exports = factory(require('jquery'),require('lodash'));
    } else {
        root.h5Share = factory(root.jQuery, root._);
    }
})(this, function ($,_) {
    return {
        each:function () {
            return _.last([1, 2, 3]);

        },
        write:function () {
            // 国外大多数不支持cmd，要自己改造！
            $("body").html("返回[1, 2, 3]数组最后一个为："+this.each())
        }
    }
})
