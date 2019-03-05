$(document).ready(function () {
  $("#dropdown1 li").on("click", function () {
    var colorValue ={
      personalize:$(this).text()
    };
    $.ajax("/personalize/update",{
      type:"UPDATE",
      data:colorValue
    }).then(function(){
      console.log("personalize updated");
      
      // $(".nav-wrapper").css("background-color", colorValue);
    });
  })

  // $("#logout").on("click", function () {
  //   $.ajax("/logout",{
  //     type:"GET",
  //   }).then(function(){
  //     console.log("logged out");
  //   })
  // });
})

$('.dropdown-trigger').dropdown();

$(document).ready(function () {
  $('.sidenav').sidenav();
});

$('.dropdown-trigger2').dropdown();