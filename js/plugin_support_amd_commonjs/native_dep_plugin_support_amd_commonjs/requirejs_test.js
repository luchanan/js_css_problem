// 调用
requirejs.config({
    paths: {
        jquery: '//cdn.bootcss.com/jquery/3.2.1/jquery.min',
        lodash: '//cdn.bootcss.com/lodash.js/4.17.4/lodash.min'
    }
});

require(['browser_globals'],function (share) {
    share.write();
})