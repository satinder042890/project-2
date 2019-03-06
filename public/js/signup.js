$(document).ready(function(){
    $("#register").on("click",newUserDetails);
})
//function to store new user details.
function newUserDetails(){
    
    var pwd=$("#password").val();
    var confirmpwd=$("#confirmpassword").val();
    var monthlyIncome = decimalCheck($('#monthlyIncome').val());

    if(($("#username").val()) === ""){
        alert("please enter valid username");
    } 
    else if(pwd === "" || pwd.length < 6){
        alert("please set your password to more than 6 characters");
    } 
    else if(monthlyIncome === "" || !monthlyIncome){
        alert("please enter your monthly Income");
    } 
    else if(pwd !== confirmpwd){
        alert("password does not match");
    }
    else{
       
       var newUser={
           username:$("#username").val().trim(),
           password:$("#password").val().trim(),
           monthlyIncome:$("#monthlyIncome").val().trim()
       };

    //    let firstName = hasNumber($('#first_name').val());
    //    let lasttName = hasNumber($('#first_name').val());

    //    console.log("Does first name have a number?", firstName, "Does last name have a number?:", lastName);

    //    if (firstName || lastName){
    //        alert("no numbers please"); 
    //    }else{
    //        alert("Your account has been created!")
    //    }


      $.ajax("/signup/post",{
          type:"POST",
          data:newUser
      }).then(function(){
           console.log("new user added to the database");
           location.reload();
      })  
    }
}




    function decimalCheck(num){
        var regEx = /^(\$)?([1-9]{1}[0-9]{0,2})(\,\d{3})*(\.\d{2})?$|^(\$)?([1-9]{1}[0-9]{0,2})(\d{3})*(\.\d{2})?$|^(0)?(\.\d{2})?$|^(\$0)?(\.\d{2})?$|^(\$\.)(\d{2})?$/

        return regEx.test(num)
    }