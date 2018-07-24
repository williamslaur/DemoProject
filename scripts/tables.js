$(document).ready(function(){

    //obtain group name from index.html 

    // from index.html
    document.getElementById("write").innerHTML = window.location.search; // you will have to parse
    // the query string to extract the
    // parameter you need


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
