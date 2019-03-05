$(document).ready(function () {
//route to get personalize data from database
  $.ajax("/personalize",{
    type:"GET",
  }).then(function(data){    
    $(".nav-wrapper").css("background-color", data.personalize);
  }); 

//route to update personalize 
  $("#dropdown1 li").on("click", function () {
    var colorValue ={
      personalize:$(this).text() 
    };
    $.ajax("/personalize/update",{
      type:"PUT",
      data:colorValue
    }).then(function(){
      location.reload();
    });
  })
})


$('.dropdown-trigger').dropdown();

$(document).ready(function () {
  $('.sidenav').sidenav();
});

$('.dropdown-trigger2').dropdown();