$(document).ready(function(){
    $("#dropdown li").on("click",function(){
        var colorValue=$(this).text();
        console.log(colorValue);
        $(".nav-wrapper").css("background-color",colorValue);
        $("#foot").css("background-color",colorValue);
    })


    // $(".first_name")=function validate() {
    //     if (document.myForm.name.value == "") {
    //         alert("Enter a name");
    //         document.myForm.name.focus();
    //         return false;
    //     }
    //     if (!/^[0-9]*$/g.test(document.myForm.name.value)) {
    //         alert("Invalid characters");
    //         document.myForm.name.focus();
    //         return false;
    //     }
    // }

    $('#register-button').click(function(){

        let firstName = hasNumber($('#first_name').val());
        let lastName = hasNumber($('#last_name').val());

        console.log ("DOES FIRST NAME HAVE A NUMBER?", firstName, "DOES LAST NAME HAVE A NUMBER?:", lastName)

        if (firstName || lastName){
            alert('NO NUMBERS PLEASE!')
        }else{

            //PUT CODE TO REGISTER USER


            alert("YOU SIGNED UP COOL!")
        }

    });


    function hasNumber(str) {
        return /\d/.test(str);
      }

    
});







