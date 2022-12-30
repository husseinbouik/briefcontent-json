
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Set the callback function
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Parse the JSON data
      var data = JSON.parse(xhr.responseText);

      // Get the table element
      var table = document.getElementById("tbody");

      // Iterate over the data and append a row to the table for each item
      data.forEach(function(item) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.innerHTML = item.title;
        cell2.innerHTML = item.director;
        cell3.innerHTML = item.runtime;
        cell4.innerHTML = item.year;
        cell5.innerHTML = `<img  id ="boom" src="${item.posterUrl}" >`;
        cell6.innerHTML = item.actors;
        cell7.innerHTML = item.Festivals;


      });
    }
  };

  // Open the request
  xhr.open("GET", "/movies.json", true);

  // Send the request
  xhr.send();

