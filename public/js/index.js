//Materialize JS------
$(document).ready(function () {
//route to get personalize data from database
  $.ajax("/personalize",{
    type:"GET",
  }).then(function(data){    
    $(".colornav").css("background-color", data.personalize);
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
})

//Show Expenses
$('#viewexpenses').on('click', function () {
  $('#jumbo').hide();
  $('#showexpenses').show();
});

//Delete expense from table
$('#deleteExp').on('click', function () {
  deleteEntry(this);
});
//-------------------------------------------------

//CRUD Functions***************
var entries;
var category = $('#expCategory').val();
// var userName = req.user.userName;

//delete function******
function deleteEntry(id) {
  $.ajax({
      method: "DELETE",
      url: "/user/" + req.user //*******/
    })
    .then(function () {
      getExpenses();
    });
};

//Pulling expense entries*****
function getEntries() {
  $.get("/user/" + req.user.userName, function (data) {
    for (var i = 0; i < entries.length; i++) {
      let expEntry = $("<tr>");
      expEntry.attr("id", "entry-"+i);
      $('#expTable').append(expEntry);
      $("#entry-"+i).append("<td>Date</td><td>"+ data[i].amount + "</td><td>" + data[i].notes + "</td><td>" + data[i].category + "</td><td><button class='btn' id='deleteExp'>Delete</button></td>")
    }
  })
}

//Posts expense entry
// let addExp = $('#addExp');
// let expInput = $('#addexpense-amount').val();
// let expNotes = $('#addexpense-note').val();
// let expCategory = $('#expCategory').val();



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
           location.reload();
      })  
    }
};




