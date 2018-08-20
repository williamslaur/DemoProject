$(document).ready(function(){


    //bring in data from index.html

    var adminjsonstring = localStorage.getItem("adminFound");
    
    var jsonObject = JSON.parse(adminjsonstring); 
    
    console.log(jsonObject);
    
    
//display the section of the page confirming the groupName if one is present

    if (jsonObject !== undefined) {

      $("#myGroupData").show();  
    } else {
      $("#myGroupData").hide();  
    }
    
    //enter the data into the group name on the front page
    document.getElementById("myGroup").innerHTML = jsonObject.groupName;
   

    
  })
    