//Materialize JS------
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
  $('.dropdown-trigger').dropdown();
  $('.dropdown-trigger2').dropdown();
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('select').formSelect();
  $('#showexpenses').hide();
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

//Pulling expense entries*****
function getEntries() {
  $.get("/user/" + userName, function (data) {
    for (var i = 0; i < entries.length; i++) {
      let expEntry = $("<tr>");
      expEntry.attr("id", "entry-"+i);
      $('#expTable').append(expEntry);
      $("#entry-"+i).append("<td>Date</td><td>"+ data[i].amount + "</td><td>" + data[i].note + "</td><td>" + data[i].category + "</td><td><button class='btn' id='deleteExp'>Delete</button></td>")
    }
  })
}

//Posts expense entry
let addExp = $('#addExp');
let expInput = $('#addexpense-amount').val();
let expNotes = $('#addexpense-note').val();
let expCategory = $('#expCategory').val();

$(addExp).on("submit", function handleFormSubmit(event) {
  event.preventDefault();
  // Wont submit the entry if we are missing a value or a note
  if (!expInput.val().trim() || !expNotes.val().trim()) {
    return;
  }
  // Constructing a newExp object to hand to the database
  var newExp = {
    amount: expInput.val().trim(),
    note: expNotes.val().trim(),
    category: expCategory.val()
  };

  submitExp(newExp);
});

//Submits new Entry****Needs route
function sumbitExp(Exp){
  $.post("api", Exp, function(){
    window.location.reload();
  })
};


//Show Expenses
$('#viewexpenses').on('click', function () {
  $('#jumbo').hide();
  $('#showexpenses').show();
});

//Delete expense from table
$('#deleteExp').on('click', function () {
  deleteEntry(this);
});

