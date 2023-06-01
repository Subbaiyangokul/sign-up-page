function validation () {
var x = document.forms["form"]["firstname"].value ;
if (x == ""){
    alert("please enter the details");
    return false
}

var y = document.forms["form"]["password"].value;
if(y.length >= 8){
    alert("please enter at 8 character")
}
alert("your free trial start now")
}