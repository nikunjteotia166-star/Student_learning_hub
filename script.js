document.addEventListener("DOMContentLoaded", function(){

let form=document.getElementById("signupForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Registration Successful!");

});

}

});

window.onload = function () {
    alert("Welcome to Student Learning Hub!");
}