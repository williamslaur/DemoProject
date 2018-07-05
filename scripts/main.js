$(document).ready(function(){

//verifying input is not empty or in both fields

function inputTest() {
if ($(participantEmail).val==0 && $(adminEmail).val==0)
  alert("Please enter a valid email address before clicking Submit.")

  if ($(participantEmail).val!==0 && $(adminEmail).val!==0)
  alert("Please enter a valid email in only one box and click Submit.")

};


// testing that email has valid items in email

function validateEmail(email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( email );
};

var clicked = jQuery("button");

clicked.click(function() {
  var email = jQuery("input[type='email']").val();
  ( !validateEmail(email) ) ? alert('Please enter a valid email address') : alert('yes') 
});



})