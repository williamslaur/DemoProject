$(document).ready(function(){

// array objects to represent data in a back end

var santaadmin = [
  {groupName: "santa", adminEmail: "admin1@pal.com"},
  {groupName: "santa", adminEmail: "admin2@pal.com"},
];

var santapart = [
  {groupName: "santa", participantEmail: "user1@pal.com", terms: "x", survey: "x", matchEmail: "user3@pal.com"},
  {groupName: "santa", participantEmail: "user2@pal.com", terms: "x", survey: "x", matchEmail: "user5@pal.com"},
  {groupName: "santa", participantEmail: "user3@pal.com", terms: "x", survey: "x", matchEmail: "user1@pal.com"},
  {groupName: "santa", participantEmail: "user4@pal.com", terms: "x", survey: "x", matchEmail: "user2@pal.com"},
  {groupName: "santa", participantEmail: "user5@pal.com", terms: "x", survey: "x", matchEmail: "user4@pal.com"},
] 

//get participants information

document.getElementById("partSubmit").addEventListener("click", comparePartForm);
document.getElementById("adminSubmit").addEventListener("click", compareAdminForm);

//get value of input fields and identify the object to look through

function comparePartForm() { 

  debugger;
  var partGrpVal = document.forms["partInputFields"]["partGrpName"].value;
  var partEmVal = document.forms["partInputFields"]["partEmail"].value;
  
  var partGrpValstr = partGrpVal.toLowerCase();
  var partEmValstr = partEmVal.toLowerCase();

  const partArray = partGrpValstr + "part";

  //check if the new const will be found as an array

  array.isarray(partArray);

  //go to object and find participantEmail

  
  function checkPartEmail(pal){
    return pal.participantEmail === (partEmValstr);
    
  }
  

//how do I get this to realize that myArray is the same as the Santapart array listed above when I use Santa as group name?

  var found = partArray.find(checkPartEmail);


  //convert to object to JSON string - is this needed?

  var myJSON = JSON.stringify(found);
  


  //send to jsonstore.io = how do I get the body: to input the object "found"?

  fetch('https://www.jsonstore.io/04c5db65a78544c553e1a355b6629239b8e39ec0d943a88cefb9efa8da71f1ae/users/1', {
  headers: {
    'Content-type': 'application/json'
  },
  method: 'POST',
  body: found,

  });

  //send the user to the participants page

  window.location.assign("file:///C:/Users/Laura/DemoProject/participant.html")
      
  };


  


//get value of administrator's input fields and identify the object to look through

function compareAdminForm() {
  var x = document.forms["adminInputFields"]["adminGrpName"].value;
  var y = document.forms["adminInputFields"]["adminEmail"].value;

  var xstr = x.toLowerCase();
  var ystr = y.toLowerCase();

  const myArray = xstr + "admin";


//go to object and find adminEmail

function checkAdminEmail(pal){
  return pal.adminEmail === (ystr);
  
}
///how can get this to realize that myArray is the same as the santaadmin object above when I use Santa as group name?

var found = myArray.find(checkAdminEmail);

console.log(found);

//convert to object to JSON string - is this needed?

var myJSON = JSON.stringify(found);



  //send to jsonstore.io = how do I get the body: to input the object "found or myJSON"?

  fetch('https://www.jsonstore.io/9ca1ddbf9c352de661626070ba46dfa7cc63424575caf1c51993b5b421300552/users/1', {
  headers: {
    'Content-type': 'application/json'
  },
  method: 'POST',
  body: { name: 'jon snow', age: 31 },

  });

  //send the user to the administrators page

  window.location.assign("file:///C:/Users/Laura/DemoProject/adminSheet.html")
      
  }; 

});

// array objects to represent data in a back end

var santaadmin = [
  {groupName: "santa", adminEmail: "admin1@pal.com"},
  {groupName: "santa", adminEmail: "admin2@pal.com"},
];

var santapart = [
  {groupName: "santa", participantEmail: "user1@pal.com", terms: "x", survey: "x", matchEmail: "user3@pal.com"},
  {groupName: "santa", participantEmail: "user2@pal.com", terms: "x", survey: "x", matchEmail: "user5@pal.com"},
  {groupName: "santa", participantEmail: "user3@pal.com", terms: "x", survey: "x", matchEmail: "user1@pal.com"},
  {groupName: "santa", participantEmail: "user4@pal.com", terms: "x", survey: "x", matchEmail: "user2@pal.com"},
  {groupName: "santa", participantEmail: "user5@pal.com", terms: "x", survey: "x", matchEmail: "user4@pal.com"},
] 
