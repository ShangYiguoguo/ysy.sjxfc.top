    $(function(){
    var p=60;/*进度变量*/
    var $p=$("#progress")
    var timer=setInterval(function(){
    p--;
    if (p<0) {
    clearInterval(timer);
    
    return;
    }
    $p.css("width",p+"%");
    $("#pspan").html(p);
    },1000);
    });
    
    $(function(){
    $("#btnxyb").click(function() {
    var yzm=$("#txtyzm").val();
    if(yzm.length<6 || yzm.length>6) {
    alert("ID不合法!");
    $("#txtyzm").focus();
    return;
    }
    location="szxmm.html";
    });
});
