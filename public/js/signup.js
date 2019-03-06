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

       console.log(newUser);
       
      $.ajax("/signup/post",{
          type:"POST",
          data:newUser
<<<<<<< HEAD
      }).then(function(err){
        if (!err){
            alert("NEW USER CREATED YAY")
        }
        
        console.log("TEST")
=======
      }).then(function(){
           alert("you are successfuly registered");
>>>>>>> 32a1dfdae922042470e5f335c7ea4356876250e3
      })  
    }

    
}




    function decimalCheck(num){
        var regEx = /^(\$)?([1-9]{1}[0-9]{0,2})(\,\d{3})*(\.\d{2})?$|^(\$)?([1-9]{1}[0-9]{0,2})(\d{3})*(\.\d{2})?$|^(0)?(\.\d{2})?$|^(\$0)?(\.\d{2})?$|^(\$\.)(\d{2})?$/

        return regEx.test(num)
    }