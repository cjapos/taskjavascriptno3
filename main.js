import getUserInput from "./modules.js";
import {
  Calculator,
  convertToJson,
  saveToLocalStorage,
  getFromLocalStorage,
  isPositive,
  operateOnNumbers,
  fetchData,
} from "./modules.js";

getUserInput();
const apiUrl = "https://jsonplaceholder.typicode.com/todos/";

const apiSet = document.getElementById("displayApi");
apiSet.innerHTML = apiUrl;

document.addEventListener("DOMContentLoaded", function () {
  const loadButton = document.getElementById("loadbtn");
  const clearButton = document.getElementById("clearbtn");
  const table = document.getElementById("data-table");

  loadButton.addEventListener("click", () => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        // Clear previous table data
        table.innerHTML = "";
        // Create table header
        const headers = ["User ID", "Task ID", "Title", "Completed"];
        const headerRow = document.createElement("tr");
        headers.forEach((headerText) => {
          const th = document.createElement("th");
          th.textContent = headerText;
          // th.style.border = "1px solid black";
          headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Populate the table with the data
        data.forEach((item) => {
          const row = document.createElement("tr");
          const userIdCell = document.createElement("td");
          userIdCell.textContent = item.userId;
          const taskIdCell = document.createElement("td");
          taskIdCell.textContent = item.id;
          const titleCell = document.createElement("td");
          titleCell.textContent = item.title;
          const completedCell = document.createElement("td");
          completedCell.textContent = item.completed
            ? "Completed"
            : "Not yet completed";
          if (item.completed) {
            completedCell.style.color = "green";
            completedCell.style.fontWeight = "bold";
          } else {
            completedCell.style.color = "red";
            completedCell.style.fontWeight = "bold";
          }

          row.appendChild(userIdCell);
          row.appendChild(taskIdCell);
          row.appendChild(titleCell);
          row.appendChild(completedCell);
          table.appendChild(row);
        });
      });
  });

  clearButton.addEventListener("click", () => {
    table.innerHTML = "";
  });
});
