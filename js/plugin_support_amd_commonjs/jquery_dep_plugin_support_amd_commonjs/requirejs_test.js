// 调用
requirejs.config({
    paths: {
        jquery: '//cdn.bootcss.com/jquery/3.2.1/jquery.min',
    }
});

require(['browser_globals'],function () {
    $("body").h5Share();
    $(".li").h5Share({color:"green"}).text("背景");
})