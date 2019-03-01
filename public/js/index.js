$(document).ready(function(){
    $("#dropdown li").on("click",function(){
        var colorValue=$(this).text();
        console.log(colorValue);
        $(".nav-wrapper").css("background-color",colorValue);
        $("#foot").css("background-color",colorValue);
    })
})



