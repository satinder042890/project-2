$(document).ready(function () {
  $("#dropdown1 li").on("click", function () {
    var colorValue = $(this).text();
    console.log(colorValue);
    $(".colornav").css("background-color", colorValue);
  })
})

$('.dropdown-trigger').dropdown();

$(document).ready(function () {
  $('.sidenav').sidenav();
});

$('.dropdown-trigger2').dropdown();
$(document).ready(function(){
  $('.modal').modal();
});
$(document).ready(function(){
  $('select').formSelect();
});