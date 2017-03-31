// 调用
// if(typeof define === "function" && define.amd) {}, 你可以注释{}里面的来看看效果
require(['browser_globals'],function (share) {
    var a=share({"id":"op"});
    a.init(); // op
    a.open(); // open
})