function tableCreate() {
 var body = document.getElementsByTagName("body")[0];
 var tbl = document.createElement("table");
 var tblBody = document.createElement("tbody");
 for (var j = 0; j <= 3; j++) {
   var row = document.createElement("tr");
   for (var i = 0; i < 3; i++) {
     var cell = document.createElement("td");
     var cellText = document.createTextNode("cell is row " + j + ", column " + i);
     cell.appendChild(cellText);
     row.appendChild(cell);
   }
   tblBody.appendChild(row);
 }
 tbl.appendChild(tblBody);
 body.appendChild(tbl);
 tbl.setAttribute("border", "2");
}
