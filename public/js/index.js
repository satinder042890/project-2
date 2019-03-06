//Materialize JS------
$(document).ready(function () {
//route to get personalize data from database
  $.ajax("/personalize",{
    type:"GET",
  }).then(function(data){    
    $(".colornav").css("background-color", data.personalize);
    $("#username").text(data.userName);
    $("#total").text("$"+data.monthlyIncome);
  }); 
  $("#addExp").on("click",sumbitExp);
  

   //route to update personalize 
  $("#dropdown1 li").on("click", function () {
    // var colorValue = $(this).text();
    // console.log(colorValue);
    // $(".colornav").css("background-color", colorValue);
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
  $('.dropdown-trigger').dropdown();
  $('.dropdown-trigger2').dropdown();
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('select').formSelect();
  $('#showexpenses').hide();

  $('#dropdown3 li').on('click', function () {
    var category=$(this).text() ;
    console.log("value"+category);
    
    
    $('#expTable').empty();
    $.ajax("/expense/"+category,{
      type:"GET",
    }).then(function(data){
      for(let i = 0; i < data.length; i++) {
        let row = $("<tr>");
        row.append("<td>" + data[i].createdAt);
        row.append("<td>" + "$" + data[i].expenses);
        row.append("<td>" + data[i].notes);
        row.append("<td>" + data[i].category);
        row.append("<button class='btn deleteExp'>Delete</button>");
        $("#expTable").append(row);
      }
    })
  });


})
//-------------------------------------------------

//CRUD Functions***************
var entries;
var category = $('#expCategory').val();
var userName = "";

//delete function******
function deleteEntry(id) {
  $.ajax({
      method: "DELETE",
      url: "api" //*******/
    })
    .then(function () {
      getExpenses();
    });
};

//Submits new Entry****Needs route
function sumbitExp(){
    var amount=$("#addexpense-amount").val();
    var notes=$("#addexpense-note").val();
    if(amount === ""){
        alert("please enter the amount");
    } 
    else if(notes === ""){
        alert("please enter notes");
    } 
    else{
       var newExpense={
           expenses:$("#addexpense-amount").val().trim(),
           notes:$("#addexpense-note").val().trim(),
           category:$("#expCategory option:selected").text()
       };
      $.ajax("/user/addexpenses",{
          type:"POST",
          data:newExpense
      }).then(function(data){
           alert("New Expense is added to your account");

          //  location.reload();
      })  
    }
};



//Show Expenses
$('#viewexpenses').on('click', function () {
  $('#jumbo').hide();
  $('#showexpenses').show();
  $.get("/user", function(data) {
    console.log(data);
    for(let i = 0; i < data.length; i++) {
      let row = $("<tr>");
      row.append("<td>" + data[i].createdAt);
      row.append("<td>" + "$" + data[i].expenses);
      row.append("<td>" + data[i].notes);
      row.append("<td>" + data[i].category);
      row.append("<button class='btn deleteExp'>Delete</button>");
      $("#expTable").append(row);
    }
  })
});




//Delete expense from table
//STILL NOT WORKING AS OF RN
$('#expTable').on('click', "button", function () {
  console.log("clicked");
  deleteEntry(this);
});

