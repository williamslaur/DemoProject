
//retrieve data from json local storage

var participantjsonstring = localStorage.getItem("participantFound");

var jsonObject = JSON.parse(participantjsonstring); 

console.log(jsonObject);

//input it into the section of the screen to verify

document.getElementById("groupName").innerHTML = jsonObject[0].groupName;

document.getElementById("emailAddress").innerHTML = jsonObject[0].participantEmail;






$(document).ready(function(){

});