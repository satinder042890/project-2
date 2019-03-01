$(document).ready(function(){
    $("#register").on("click",newUserDetails);
})
//function to store new user details.
function newUserDetails(){
    
    var pwd=$("#password").val();
    var confirmpwd=$("#confirmpassword").val();
    if(($("#username").val()) === ""){
        alert("please enter valid username");
    } 
    else if(pwd === ""){
        alert("please set your password");
    } 
    else if(($("#monthlyIncome").val()) === ""){
        alert("please enter your monthly Income");
    } 
    else if(pwd !== confirmpwd){
        alert("password does not match");
    }
    // else{
    //    var newUser={
    //        username:$("#username").val().trim(),
    //        password:$("#password").val().trim(),
    //        monthlyIncome:$("#monthlyIncome").val().trim()
    //    };
    //   $.ajax("/signup/post",{
    //       type:"POST",
    //       data:newUser
    //   }).then(function(){
    //        console.log("new user added to the database");
    //        location.reload();
    //   })  
    // }
}