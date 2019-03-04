//Materialize JS------
$(document).ready(function () {
  $("#dropdown1 li").on("click", function () {
    var colorValue = $(this).text();
    console.log(colorValue);
    $(".colornav").css("background-color", colorValue);
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

//delete function
function deleteEntry(id) {
  $.ajax({
      method: "DELETE",
      url: "api" //*******/
    })
    .then(function () {
      getExpenses();
    });
};

//Pulling expense entries
function getEntries() {
  $.get("api", function (data) {
    for (var i = 0; i < entries.length; i++) {

    }
  })
}


//Posts expense entry
let addExp = $('#addExpMod');
let expInput = $('#addexpense-amount');
let expNotes = $('#addexpense-note');
let expCategory = $('#expCategory');

$(addExp).on("submit", function handleFormSubmit(event) {
  event.preventDefault();
  // Wont submit the post if we are missing a body or a title
  if (!expInput.val().trim() || !expNotes.val().trim()) {
    return;
  }
  // Constructing a newPost object to hand to the database
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

//Add expense frome modal
$('#addExp').on('click', function () {

});