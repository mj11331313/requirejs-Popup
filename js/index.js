/**
 * Created by Administrator on 2017/8/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery","dialog"],function($,Dialog){
    $("#open").on("click",function(){
        var setting = {
            width:400,
            height:400,
            title:"登录",
            content:"login.html"
        };
        //通过构造函数传值，参数是一个对象：
        var dialog = new Dialog(setting);
        dialog.open();  //调用对象下的open方法
    })
});
