// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the callback function
xhr.onload = function () {
  if (xhr.status === 200) {
    // Parse the JSON data
    var data = JSON.parse(xhr.responseText);

    // Get the table element
    var table = document.getElementById("tbody");

    // Iterate over the data and append a row to the table for each item
    data.forEach(function (item) {
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      cell1.innerHTML = item.Title;
      cell2.innerHTML = item.Director;
      cell3.innerHTML = item.Runtime;
      cell4.innerHTML = item.Year;
      cell5.innerHTML = `<img width="168px" height="233PX" class ="boom" src="${item.Poster}" >`;
      cell6.innerHTML = `<ul>
        <li>${item.Actors[0]["first-name"]}<br>${item.Actors[0]["last-name"]}<br>${item.Actors[0]["nationality"]}</li>
        <li>${item.Actors[1]["first-name"]}<br>${item.Actors[1]["last-name"]}<br>${item.Actors[1]["nationality"]}</li>
        <li>${item.Actors[2]["first-name"]}<br>${item.Actors[2]["last-name"]}<br>${item.Actors[2]["nationality"]}</li>

        </ul>`;
      cell7.innerHTML = `<ul>
        <li>${item.festivals[0]}</li>
        <li>${item.festivals[1]}</li> 
        <li>${item.festivals[2]}</li> 
        <li>${item.festivals[3]}</li> 
        <li>${item.festivals[4]}</li> 

               </ul>`;
    });
  }
};

// Open the request
xhr.open("GET", "/movies.json", true);

// Send the request
xhr.send();
// search and filter
inputsearch = document.getElementById("input");
inputsearch.addEventListener("keyup", function () {
  let filter, table, row, data, dataValue; // Variables that will be used.
  filter = inputsearch.value.toUpperCase(); // Store input value in a variable => "ToUppECase".
  table = document.getElementById("tbody");
  row = table.getElementsByTagName("tr"); // All table row elements
  for (i = 0; i < row.length; i++) {
    // Loop through all rows
    data = row[i].getElementsByTagName("td")[0]; // Get the first table cell element
    if (data) {
      dataValue = data.innerText;
      if (dataValue.toUpperCase().indexOf(filter) > -1) {
        // Check if TD innerText index of input value => if false : -1 ; if True : 1 || 0
        row[i].style.display = ""; // Keep the Row That return : True
      } else {
        row[i].style.display = "none"; // hide The Row That return : False
      }
    }
  }
});
function listforfestivals(jsonObject) {
  let festivals, ul, li, td;
  festivals = jsonObject["festivals"];
  td = document.createElement("td");
  ul = document.createElement("ul");
  for (let j = 0; j < festivals.length; j++) {
    li = document.createElement("li");
    li.setAttribute("id", "li" + j);
    li.innerHTML = festivals[j];
    ul.appendChild(li);
  }
  td.appendChild(ul);
  return td;
}
