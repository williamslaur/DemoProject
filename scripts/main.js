$(document).ready(function(){

// array objects to represent data in a back end

var adminTable = [
  {groupName: "santa", adminEmail: "admin1@pal.com"},
  {groupName: "santa", adminEmail: "admin2@pal.com"},
  {groupName: "elves", adminEmail: "admin1@elves.com"},
];

var partTable = [
  {groupName: "santa", participantEmail: "user1@pal.com", terms: "x", survey: "x", matchEmail: "user3@pal.com"},
  {groupName: "santa", participantEmail: "user2@pal.com", terms: "x", survey: "x", matchEmail: "user5@pal.com"},
  {groupName: "santa", participantEmail: "user3@pal.com", terms: "x", survey: "x", matchEmail: "user1@pal.com"},
  {groupName: "santa", participantEmail: "user4@pal.com", terms: "x", survey: "x", matchEmail: "user2@pal.com"},
  {groupName: "santa", participantEmail: "user5@pal.com", terms: "x", survey: "x", matchEmail: "user4@pal.com"},
  {groupName: "elves", participantEmail: "user1@elves.com", terms: "x", survey: "x", matchEmail: "user3@elves.com"},
  {groupName: "elves", participantEmail: "user3@elves.com", terms: "x", survey: "x", matchEmail: "user1@elves.com"},
] 

//get participants information

document.getElementById("partSubmit").addEventListener("click", comparePartForm);
document.getElementById("adminSubmit").addEventListener("click", compareAdminForm);

//get value of input fields and identify the object to look through

function comparePartForm() { 

  var partGrpVal = document.forms["partInputFields"]["partGrpName"].value;
  var partEmVal = document.forms["partInputFields"]["partEmail"].value;
  
  var partGrpValstr = partGrpVal.toLowerCase();
  var partEmValstr = partEmVal.toLowerCase();


  //go to object and find participantEmail -
  
  var found = partTable.filter(function(element){
    return (element.participantEmail === partEmValstr && element.groupName === partGrpValstr);
  });

console.log(found);

  if (found.length !== 0){
    console.log(found);
  } else {
    alert("User not found.  Check your Group Name and email again, or contact your administrator for help.")
  }
  
      
  var myJSON = JSON.stringify(found);  //convert to object to JSON string

  localStorage.setItem("participantFound", myJSON);   //we save the object as string

  console.log(myJSON);
 
  window.location.assign("participant.html");   //send the user to the participants page
      
  };


  //need to get an error along the way to pop up to check group name if it fails. 


//get value of administrator's input fields and identify the object to look through

function compareAdminForm() {

 

  var x = document.forms["adminInputFields"]["adminGrpName"].value;
  var y = document.forms["adminInputFields"]["adminEmail"].value;

  var xstr = x.toLowerCase();
  var ystr = y.toLowerCase();

//go to object and find adminEmail

var found = adminTable.find(function(element){
  return (element.adminEmail === ystr && element.groupName === xstr);

});

// display an error message if the user is not in the table

if (found.length !== 0){
  console.log(found);
} else {
  alert("User not found. Please check your Group Name and Email again or click the Browse Admin button and begin a new group.");
}

//convert object to JSON string 

var myJSON = JSON.stringify(found);

localStorage.setItem("adminFound", myJSON);   //we save the object as string

window.location.assign("adminSheet.html");   //send the user to the administrators page

};

});

