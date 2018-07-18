$(document).ready(function(){

// array objects to represent data in a back end

const santaadmin = [
  {groupName: "Santa", adminEmail: "Admin1@Pal.com"},
  {groupName: "Santa", adminEmail: "Admin2@Pal.com"},
];
const santapart = [
  {groupName: "Santa", participantEmail: "user1@Pal.com", terms: "x", survey: "x", matchEmail: "user3@Pal.com"},
  {groupName: "Santa", participantEmail: "user2@Pal.com", terms: "x", survey: "x", matchEmail: "user5@Pal.com"},
  {groupName: "Santa", participantEmail: "user3@Pal.com", terms: "x", survey: "x", matchEmail: "user1@Pal.com"},
  {groupName: "Santa", participantEmail: "user4@Pal.com", terms: "x", survey: "x", matchEmail: "user2@Pal.com"},
  {groupName: "Santa", participantEmail: "user5@Pal.com", terms: "x", survey: "x", matchEmail: "user4@Pal.com"},
] 

//event listener on partSubmit

$(partSubmit).click(function(){

  //verifying input is not empty and checking email is valid

    if ($(participantEmail).val=="") {
    alert("Please enter a valid email address before clicking Submit.")
    } else {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      return emailReg.test(participantEmail)};

    //if pass validation - test to see if groupname and participant email are in data

    var x = $(participantEmail).val();
    var newArray = $(groupName).val() + "part"
   

    function findUser(participantEmail) {
      for(let i = 0; i<newArray.length; ++i) {
        if(newArray[i].participantEmail === x) {
          return newArray[i];
        }
      }

    }
});

//event listener on adminSubmit

  $(adminSubmit).click(function(){

    //verifying input is not empty and checking email is valid

    if ($(adminEmail).val=="") {
      alert("Please enter a valid email address before clicking Submit.")
      } else {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        return emailReg.test(adminEmail)
      }
  });


      // test to see if group name and admin email are in data

    

})