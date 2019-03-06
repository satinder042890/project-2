//needs jquery trigger on button press
//needs read route to verify the user information
//page then routes to indextest.html

$(document).ready(function() { 
    $("#login").on("click", loginDetails);
    
    function loginDetails() {
        var validateLogin = {
            username: $("#userName").val().trim(),
            password: $("#password").val().trim() 
        };
    
        console.log(validateLogin);

       $.ajax("/login/post", {
           type:"POST",
           data: validateLogin
       }).then(function(){
            location.reload();
       })  
       console.log("login button click working");  
    }
});