$(document).ready(function(){
    $("#dropdown1 li").on("click",function(){
        var colorValue=$(this).text();
        console.log(colorValue);
        $(".nav-wrapper").css("background-color",colorValue);
        $("#foot").css("background-color",colorValue);
    })
})

 $('.dropdown-trigger').dropdown();
 
 $(document).ready(function(){
    $('.sidenav').sidenav();
  });

$('.dropdown-trigger2').dropdown();