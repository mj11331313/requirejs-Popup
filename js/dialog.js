/**
 * Created by Administrator on 2017/8/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'   //封装路径：改写为jquery
    }
});
//模块：
define(["jquery"],function($){
    //用封装方法模拟实现类：
    function Dialog(setting){
        //创建弹出层里的各个标签：
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$main = $('<div class="dialog-main"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
        //默认值：
        this.defaultSettings = {
            width:500,
            height:400,
            title:"弹出层",
            content:""
        };
        //合并参数（合并对象）：
        $.extend(this.defaultSettings,setting);
    };
    //按钮的open方法：
        Dialog.prototype.open = function(){
            this.$container.append(this.$mask).append(this.$main);
            this.$main.append(this.$title).append(this.$content);
            this.$title.append(this.$item).append(this.$close);
            $("body").append(this.$container);
            //改变标题：
            this.$item.html(this.defaultSettings.title);
            //改变大小，并使其仍然居中：
            this.$main.css({
                width:this.defaultSettings.width,
                height:this.defaultSettings.height,
                marginTop: -this.defaultSettings.height/2,
                marginLeft: -this.defaultSettings.width/2
            });
            //判断所传的content是否是一个html文件：
            if( this.defaultSettings.content.indexOf(".html") != -1){
                this.$content.load(this.defaultSettings.content);
            }else{
                this.$content.html(this.defaultSettings.content);
            };
            this.$close.on("click",function(){
                this.close();
            }.bind(this));    //改变this指向
        };
    Dialog.prototype.close = function(){
        this.$container.remove();
    };
    return Dialog;
});
