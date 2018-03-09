$(function() {
    $("#btnDengLu").click(function() {
        var name = $("#txtName").val();
        if (name.length < 3 || name.length > 10) {
            alert("Id错误");
            $("#txtName").focus();
            return;
        }
        var password = $("#txtpassword").val();
        if (password.length < 8 || password.length > 16) {
            alert("密码错误");
            $("#txtpassword").focus();
            return;
        }
        
        $("#mydialog").modal("show");
    });

});

$(function() {
    var p = 0; /*进度变量*/
    var $p = $("#progress")
    var timer = setInterval(function() {
        p++;
        if (p > 99) {
            clearInterval(timer);
        }
        $p.css("width", p + "%");
        $("#pspan").html(p);
    }, 100);


});