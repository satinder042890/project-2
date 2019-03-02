$(document).ready(function(){
    $("#register-button").on("click",newUserDetails);
})
//function to store new user details.
function newUserDetails(){
    
    var pwd=$("#password").val();
    var confirmpwd=$("#confirmpassword").val();
    if(($("#username").val()) === ""){
        alert("please enter valid username");
    } 
    else if(pwd === "" || pwd.length < 6){
        alert("please set your password to more than 6 characters");
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

// function checkPass() {
//     var checkPass=$("#password").val();

//     if (checkPass.length < 6) {
//         alert("please enter your must be min 6 char");
//     }
//     alert ("good password");
    
// }
