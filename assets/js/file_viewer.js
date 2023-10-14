console.log('Im in');


document.getElementById("go").addEventListener("click", performSearch);

// function searchTable() {
//   // Get the input value and convert it to lowercase
//   const input = document.getElementById("search-input").value.toLowerCase();
//   console.log(input);
  
//   // Get all table rows and iterate through them
//   const rows = document.getElementsByTagName("tr");

//   for (let i = 0; i < rows.length; i++) {
//     // Get the text content of each row and convert it to lowercase
//     const rowText = rows[i].textContent.toLowerCase();
    
//     // If the input value is found in the row text, highlight the row
//     if (rowText.includes(input)) {
//       rows[i].classList.add("highlight");
//     } else {
//       rows[i].classList.remove("highlight");
//     }
//   }
// }

    function performSearch() {
      var input, filter, table, tr, td, i, j, txtValue;
      input = document.getElementById("search-input");
      filter = input.value.toUpperCase();
      table = document.getElementById("data-table");
      tr = table.getElementsByTagName("tr");

      for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none"; // Hide all rows initially
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
          txtValue = td[j].textContent || td[j].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break; // Show the row and move to the next row
          }
        }
      }
    }

    // Add an event listener to the search button
    document
      .getElementById("search-button")
      .addEventListener("click", performSearch);

    // You can also add an event listener to trigger the search on pressing Enter in the input field
    document
      .getElementById("search-input")
      .addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
          performSearch();
        }
      });


