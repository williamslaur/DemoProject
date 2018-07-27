$(document).ready(function(){

//bring in data from index.html

var adminjsonstring = localStorage.getItem("adminFound");

var jsonObject = JSON.parse(adminjsonstring); 

console.log(jsonObject);

//pull in the groupname and username to tables to show group to be reviewed

document.getElementById("groupName").innerHTML = jsonObject.groupName;
document.getElementById("emailAddress").innerHTML = jsonObject.adminEmail;


//retrieve only the data matching the groupname above


$("#getDataTables").click(function(){

    
    var group = document.getElementById("groupName").innerHTML = jsonObject.groupName;
    var groupstr = group.toLowerCase();

    //retrieve administrators for the group

    var adminGrp = adminTable.filter(function(element){
      return (element.groupName === groupstr);
    })
      console.log(adminGrp);

    //retrieve participants for the group

    var partGrp = partTable.filter(function(element){
      return (element.groupName === groupstr);
    })
    console.log(partGrp);


  //to populate the tables for the data

  $("#adminjsGrid").jsGrid({
    width: "100%",
    height: "175px",

    inserting: false,
    editing: false,
    sorting: false,
    paging: false,

    data: adminGrp,

    fields: [
        { name: "groupName", type: "text", width: 50, validate: "required", title: "Group Name"},
        { name: "adminEmail", type: "number", width: 150, title: "Administrator's Email" }
        
    ]
});

$("#partjsGrid").jsGrid({
  width: "100%",
  height: "400px",

  inserting: false,
  editing: false,
  sorting: false,
  paging: false,

  data: partGrp,

  fields: [
      { name: "groupName", type: "text", width: 75, title: "Group Name", validate: "required" },
      { name: "participantEmail", type: "number", width: 125, title: "Secret Pal Email" },
      { name: "terms", type: "number", width: 25, title: "Accept Terms" },
      { name: "survey", type: "number", width: 25, title: "Survey Complete" },
      { name: "matchEmail", type: "number", width: 125, title: "Matched Pal Email" },
  ]
});
    
});



 //Method to add nw admins 
 $("#plus1").click(function() {
  var groupNameInput = $("#groupNameInput").val();
  var adminEmailInput = $("#adminEmailInput").val();  
  
  //we add the group name and email input to array in case you need it in the future
  adminTable.push({groupName : groupNameInput, adminEmail : adminEmailInput});

  $(".groupName").append("<tr>" + 
        "<td>"+ groupNameInput + "</td>" + 
        "<td>"+ adminEmailInput  +"</td>" + 
        "<td><img src='./images/redMinus.png' class='minus1' /></td>"  + 
        "</tr>")
    });

  /*Method to remove admin from the table and the array
  we do this way, because the minus button doesn't exist yet in the view, and when an element 
  doesn't exist, you can access it directly, you have to get the parent element and the search for 
  the actual element you want to click   we are telling to get the adminTabLines table, 
  and on the "click" event, it will search for the actual minus2 class, so for each minus button,
  it will have an independent click event
  this way, we can control which row to delete and remove the element from the array  */

  $("#adminTabLines").on("click", ".minus1", function() {
    var row = $(this).parent().parent();  //we get the row <tr> from the table
    var emailSelected = $(row).children().next()[0];   //ugly way to get the <td> where is the email from the admin email
    index = adminTable.findIndex(x => x.adminEmail == $(emailSelected).text());   //we get the index of the array, where is the email you want to delete
    adminTable.splice(index, 1);   //we remove the element from the array
    $(row).remove();   //we delete the row from the table in the view
  });


// functions to add or subtract lines from participants input tables

$("#plus2").click(function() {
  var groupName = $("#groupNameInput").val();
  var participantEmail = $("#partEmailInput").val();
  var termsAgreement = $("#termsInput").val();
  var surveyComplete = $("#surveyInput").val();
  var matchEmail = $("#matchEmailInput").val();
  
  //we push the object to the array, 
  partTable.push({groupName: groupName, participantEmail: participantEmail, terms: termsAgreement, survey: surveyComplete, matchEmail: matchEmail})
  
  console.log(partTable)

  $(".secretPalBody").append("<tr>" + 
  "<td>" + groupName + "</td>" +
  "<td>" + participantEmail + "</td>" +
  "<td>" + termsAgreement + "</td>" +
  "<td>" + surveyComplete + "</td>" +
  "<td>" + matchEmail + "</td>" +
  "<td><img src='./images/redMinus.png' class='minus2' /></td>" +
"</tr>");
});

//we do this way, because the minus button doesn't exist yet in the view, and when an element doesn't exist, you can access it directly, you have to get the parent element and the search for the actual element you want to click
  //we are telling to get the partTabLines table, and on the "click" event, it will search for the actual minus2 class, so for each minus button, it will have an independent click event
  //this way, we can control which row to delete and remove the element from the array
  $("#partTabLines").on("click", ".minus2", function() {        
    var currentRow = $(this).parent().parent();
    var groupName = $(currentRow).children().first()[0];
    index = partTable.findIndex(x => x.groupName == $(groupName).text());
    partTable.splice(index, 1);   //we remove the element from the array
    $(currentRow).remove();   //we delete the row from the table in the view

  });

  

  /*  // functions to add or subtract lines from admin input tables  

    function deleteAdmRow(row){
    var i=row.parentNode.parentNode.rowIndex;
    $("#adminTabLines").deleteRow(i);
    };

    $("#addAdmButton").click(function(){
    
    var x=$("#adminTabLines");         // deep clone the targeted row
    var new_row = x.rows[0].cloneNode(true);          // get the total number of rows
    var len = x.rows.length;                   // set the innerHTML of the first row 
    new_row.cells[0].innerHTML = len;

       // grab the input from the first cell and update its ID and value       
    var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
    inp1.id += len;
    inp1.value = '';

       // grab the input from the first cell and update its ID and value
    var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
    inp2.id += len;
    inp2.value = '';

       // append the new row to the table
    x.appendChild( new_row );
});


    $(plus1).click(function (){

     
      
        var tabLines = $("#adminTabLines");
        var tabLinesRow = tabLines.insertRow(tabLines.rows.length-1);
        var col1html = "<img src='./images/redMinus.png' id='minus1' />";
        var col2html = "<input type='text' name='groupName' />";
        var col3html = "<input type='email' name='adminEmail' />";
              
        var col1 = tabLinesRow.insertCell(0); col1.innerHTML=col1html;
        var col2 = tabLinesRow.insertCell(1); col2.innerHTML=col2html;
        var col3 = tabLinesRow.insertCell(2); col3.innerHTML=col3html;
      });

    $(minus1).click(function removeLine1(lineItem) {
        var row = lineItem.parentNode.parentNode;
        row.parentNode.removeChild(row);
      });
     
    // functions to add or subtract lines from participants input tables

    $(plus2).click(function addLine2() {
        var tabLines = document.getElementById("partTabLines");
        var tabLinesRow = tabLines.insertRow(tabLines.rows.length-1);
        var col1html = "<img src='./images/redMinus.png' id='minus2' />";
        var col2html = "<input type='text' name='groupName' />";
        var col3html = "<input type='email' name='partEmail' />";
        var col4html = "<input type='text' name='terms' />";
        var col5html = "<input type='text' name='survey' />";
        var col6html = "<input type='email' name='matchEmail' />";
        
        var col1 = tabLinesRow.insertCell(0); col1.innerHTML=col1html;
        var col2 = tabLinesRow.insertCell(1); col2.innerHTML=col2html;
        var col3 = tabLinesRow.insertCell(2); col3.innerHTML=col3html;
        var col4 = tabLinesRow.insertCell(3); col4.innerHTML=col4html;
        var col5 = tabLinesRow.insertCell(4); col5.innerHTML=col5html;
        var col6 = tabLinesRow.insertCell(5); col6.innerHTML=col6html;
      });
     
      $(minus2).click(function removeLine2(lineItem) {
        var row = lineItem.parentNode.parentNode;
        row.parentNode.removeChild(row);
      });
      

//do these tables need to be split for admin and participant as well?   How do I get them to work? 


      var frmData = {};              // an object to contain all form data
      var arrLines = new Array();    // array to contain the dynamic lines
      
      var tabLines = document.getElementById("partTabLines").rows.length-1;
      
      for (i=0;i<tabLines;i++) {
        arrLines[i] = {};
        arrLines[i]['no']     = i+1;
        arrLines[i]['field1'] = $("#frmLines input[name=field1]").eq(i).val();
        arrLines[i]['field2'] = $("#frmLines input[name=field2]").eq(i).val();
        arrLines[i]['field3'] = $("#frmLines input[name=field3]").eq(i).val();
        arrLines[i]['field4'] = $("#frmLines input[name=field4]").eq(i).val();
        arrLines[i]['field5'] = $("#frmLines input[name=field5]").eq(i).val();
        arrLines[i]['field6'] = $("#frmLines input[name=field6]").eq(i).val();
      }
      frmData['lines'] = arrLines;
      
      //frmData['another_field'] = $('#frmLines input[name=another_field]").val();
      
      var jsonData = JSON.stringify(frmData);
      
      // lines of data now in a JSON structure as indexed array
      // (plus other fields in the JSON as required)
      // ready to post via ajax etc

      */
});



var adminTable = [
  {groupName: "santa", adminEmail: "admin1@pal.com"},
  {groupName: "santa", adminEmail: "admin2@pal.com"},
  {groupName: "elves", adminEmail: "admin1@elves.com"},
];

var partTable = [
  {groupName: "santa", participantEmail: "user1@pal.com", terms: "x", survey: "x", matchEmail: "user3@pal.com"},
  {groupName: "santa", participantEmail: "user2@pal.com", terms: "", survey: "", matchEmail: ""},
  {groupName: "santa", participantEmail: "user3@pal.com", terms: "x", survey: "x", matchEmail: "user1@pal.com"},
  {groupName: "santa", participantEmail: "user4@pal.com", terms: "", survey: "", matchEmail: ""},
  {groupName: "santa", participantEmail: "user5@pal.com", terms: "", survey: "", matchEmail: ""},
  {groupName: "elves", participantEmail: "user1@elves.com", terms: "x", survey: "x", matchEmail: "user3@elves.com"},
  {groupName: "elves", participantEmail: "user3@elves.com", terms: "x", survey: "x", matchEmail: "user1@elves.com"},
] 