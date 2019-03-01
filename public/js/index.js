$(document).ready(function(){
    $("#dropdown1 li").on("click",function(){
        var colorValue=$(this).text();
        console.log(colorValue);
        $(".nav-wrapper").css("background-color",colorValue);
        $("#foot").css("background-color",colorValue);
    })
})



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
//   });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();