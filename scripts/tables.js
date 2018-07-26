$(document).ready(function(){

//bring in data from index.html

var adminjsonstring = localStorage.getItem("adminFound");

var jsonObject = JSON.parse(adminjsonstring); 

console.log(jsonObject);

//pull in the groupname to tables to show group to be reviewed

document.getElementById("groupName").innerHTML = jsonObject.groupName;
document.getElementById("emailAddress").innerHTML = jsonObject.adminEmail;


//retrieve only the data matching the groupname above


$("#getDataTables").click(function(){

    debugger;

    var group = document.getElementById("groupName").innerHTML = jsonObject.groupName;
    var groupstr = group.toLowerCase();

    //retrieve administrators for the group

    var adminGrp = adminTable.filter(function(element){
      return (element.groupName === groupstr);
    })
      console.log(adminGrp);


  //to populate the tables for the data

  function newNode(node, text, styles) {
    node.innerHTML = text;
    node.className = styles;
    return node;
  }
  
  var fragment = document.createDocumentFragment(),
      container = document.getElementById("adminGrpTable");
  
  for(var i = 1; i <= adminGrp.length; i++) {
    var tr = document.createElement("tr");
    var td = newNode(document.createElement("td"), i, "cell");
    tr.appendChild(td);
    fragment.appendChild(tr);
  }
  
  container.appendChild(fragment);

    //retrieve participants for the group

    var partGrp = partTable.filter(function(element){
      return (element.groupName === groupstr);
    })
    console.log(partGrp);
  
  
});

  
 // var bodyString = '';

   //     $.each(groupName, function(index, groupName) {
     //       bodyString += ('<tr><td>'+groupName+'</td><td>'+adminEmail[index]+'</td></tr>');
       // });
     //   $('.groupName tbody').html(bodyString);
        
        


    // functions to add or subtract lines from admin input tables  

    $(plus1).click(function addLine1() {
        var tabLines = document.getElementById("adminTabLines");
        var tabLinesRow = tabLines.insertRow(tabLines.rows.length-1);
        var col1html = "<img src='./images/redMinus.png' id='minus1' />";
        var col2html = "<input type='email' name='adminEmailInput' />";
              
        var col1 = tabLinesRow.insertCell(0); col1.innerHTML=col1html;
        var col2 = tabLinesRow.insertCell(1); col2.innerHTML=col2html;
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
        var col2html = "<input type='email' name='partEmailInput' />";
        var col3html = "<input type='text' name='termsInput' />";
        var col4html = "<input type='text' name='surveyInput' />";
        var col5html = "<input type='email' name='matchedPal' />";
        
        var col1 = tabLinesRow.insertCell(0); col1.innerHTML=col1html;
        var col2 = tabLinesRow.insertCell(1); col2.innerHTML=col2html;
        var col3 = tabLinesRow.insertCell(1); col3.innerHTML=col3html;
        var col4 = tabLinesRow.insertCell(1); col4.innerHTML=col4html;
        var col5 = tabLinesRow.insertCell(1); col5.innerHTML=col5html;
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
        arrLines[i]['field4'] = $("#frmLines input[name=field3]").eq(i).val();
        arrLines[i]['field5'] = $("#frmLines input[name=field3]").eq(i).val();
      }
      frmData['lines'] = arrLines;
      
      //frmData['another_field'] = $('#frmLines input[name=another_field]").val();
      
      //var jsonData = JSON.stringify(frmData);
      
      // lines of data now in a JSON structure as indexed array
      // (plus other fields in the JSON as required)
      // ready to post via ajax etc

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