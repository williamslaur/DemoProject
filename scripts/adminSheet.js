$(document).ready(function(){

//coding for index.html - 



//coding for the accordians

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//coding for the admintable
var insert = document.getElementById('insertitem');
insert.addEventListener('click', function() {
  var table = document.getElementById('insertfirsttable'),
    groupName = prompt("Enter the Group Name"),
    userName = prompt("Enter the Username");

  for (var r = 0; r < 1; r += 1) {
    var x = document.getElementById('insertfirsttable').insertRow(r);
    for (var c = 0; c < 10; c += 1) {
      var y = x.insertCell(c);
    }

    table.rows[r].cells[0].innerHTML = groupName;
    table.rows[r].cells[1].innerHTML = userName;
    table.rows[r].cells[9].style.width = "100px";
    var CreateBtn = document.createElement("button");
    CreateBtn.innerHTML = "remove";
    CreateBtn.id = "removebtn";
    CreateBtn.style.width = "100px";
    CreateBtn.style.height = "25px";
    CreateBtn.style.cursor = "pointer";
    CreateBtn.style.fontSize = "18px";
    table.rows[r].cells[9].appendChild(CreateBtn);
    var removeBtn = document.getElementById("removebtn");
    /* CreateBtn.onclick = function Remove() {
      var remove = prompt("Delete this Line");
      for (var a = 0; a < table.length; a += 1) {
        for (var b = 0; b < table.cells.length; b += 1) {

        }
      }
      table.rows[a].cells[4].innerHTML = parseInt(table.rows[a].cells[4].innerHTML) - sell;
    }
  } */

}
})