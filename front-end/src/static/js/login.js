$(function(){

    //登录验证
    $("#login-form").validate({
        rules: {
            username: {
                required:true,
                minlength:4
            },
            password: {
                required:true,
                minlength:5
            },
        },
        messages:{
            username:{
                "required":"账户名必须填写",
                "minlength":"账户名最少4位"
            },
            password:{
                "required":"密码必须填写",
                "minlength":"账户名最少5位"
            }
        }
    });

    //登录按钮
    $("#login-btn").click(function(){
        if($("#login-form").valid()){
            var _this=$(this)
            _this.button("loading")
            $.post("/login",toObj($("#login-form"))).success(function(result){
                console.log(result)
                _this.button("reset")
            })
        }
    })


    //弹出框
    //dialog.error("提示","123123")


})