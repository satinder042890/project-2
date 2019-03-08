//Materialize JS------
var income=0;
var bal=0;
$(document).ready(function () {
  
  //route to get personalize data from database
  $.ajax("/personalize", {
    type: "GET",
  }).then(function (data) {
    
    $(".colornav").css("background-color", data.personalize);
    $("#username").text(data.userName);
    $("#income").text("$" + data.monthlyIncome);
    income=data.monthlyIncome;
  });
  $("#addExp").on("click", sumbitExp);
  $("#incomeUpdation").on("click", changeIncome);
  $('#viewexpenses').on('click',viewExpenses);
  
  //route to update personalize 
  $("#dropdown1 li").on("click", function () {

    // var colorValue = $(this).text();
    // console.log(colorValue);
    // $(".colornav").css("background-color", colorValue);
    var colorValue = {
      personalize: $(this).text()
    };
    $.ajax("/personalize/update", {
      type: "PUT",
      data: colorValue
    }).then(function () {
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
    var category = $(this).text();
   var total=0;
    $('#expTable').empty();
    // $('#details').empty();
    $.ajax("/expense/" + category, {
      type: "GET",
    }).then(function (data) {
      for (let i = 0; i < data.length; i++) {
        let row = $("<tr>");
        row.append("<td>" + data[i].createdAt);
        row.append("<td>" + "$" + data[i].expenses);
        row.append("<td>" + data[i].notes);
        row.append("<td>" + data[i].category);
        row.append("<button class='btn deleteExp'>Delete</button>");
        $("#expTable").append(row);
        total+= data[i].expenses;
      }
      $("#total").text(category+" Total = "+total);
    })
  });


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
function sumbitExp() {
  var amount = $("#addexpense-amount").val();
  var notes = $("#addexpense-note").val();
  if (amount === "") {
    alert("please enter the amount");
  }
  else if (notes === "") {
    alert("please enter notes");
  }
  else {
    var newExpense = {
      expenses: $("#addexpense-amount").val().trim(),
      notes: $("#addexpense-note").val().trim(),
      category: $("#expCategory option:selected").text()
    };
    $.ajax("/user/addexpenses", {
      type: "POST",
      data: newExpense
    }).then(function (data) {
      alert("New Expense is added to your account");
       viewExpenses();
      //  location.reload();
    })
  }
};

//Show Expenses
 function viewExpenses() {
  $('#jumbo').hide();
  $('#showexpenses').show();
  $('#expTable').empty();
  var total=0;
  $.get("/user", function (data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let row = $("<tr>");
      row.append("<td>" + data[i].createdAt);
      row.append("<td>" + "$" + data[i].expenses);
      row.append("<td>" + data[i].notes);
      row.append("<td>" + data[i].category);
      row.append("<button class='btn deleteExp'>Delete</button>");
      $("#expTable").append(row);
      total+=data[i].expenses;
    }
    bal=income-total;
    $("#total").text("Total = "+total);
    $("#Bal").text("Balance = "+bal);
    $("#inc").text("Monthly Income = "+income);
  })
};

function changeIncome() {
  console.log("hello");
  if (($("#updateIncome").val()) === "") {
    alert("please enter your new Income");
  }
  else {
    var newIncome = {
      monthlyIncome: $("#updateIncome").val().trim()
    };
    $.ajax("/update/income", {
      type: "PUT",
      data: newIncome
    }).then(function (data) {
      location.reload();
    });
  }
}


//Delete expense from table
//STILL NOT WORKING AS OF RN
$('#expTable').on('click', "button", function () {
  console.log("clicked");
  deleteEntry(this);
});

