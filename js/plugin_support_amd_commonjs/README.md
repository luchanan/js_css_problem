### 目前我见过以下一些支持comomonjs或者amd方式

#### 支持amd，commonjs和原生，没有依赖关系且return1个

- 第一种
```
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
```
- 第二种

```
;(function (root, factory) {
    if(typeof define === "function" && define.amd) {
        // amd
        define([], function () {
            return (root.h5Share=factory())
        });
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


```

- 第三种

```
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
    return function (options) {
        return new H5Share(options);
    };
})


```

#### 支持amd，cmd，commonjs和原生，没有依赖关系且return1个

- 第一种

```
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
```

- 第二种

```
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
```

- 第三种

```
;(function () {
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
    if(typeof module !== 'undefinded' && typeof exports === 'object'){
        // commonjs，nodejs
        module.exports = h5Share;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        // amd or cmd，无依赖关系
        define(function () {
            return h5Share;
        })
    } else{
        // global
        this.h5Share=h5Share;
    }
}).call(function () {
    //call 自执行
    return this || (typeof window !== 'undefined' ? window : global);
}())
```

- 第四种（不支持seajs cmd）

```
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
```
#### 支持amd，commonjs和原生，return多个


```
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

```
#### 支持amd，commonjs和原生，有依赖关系


```
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

```

#### jquery插件 支持amd ，commonjs

```
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
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
```






