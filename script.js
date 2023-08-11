function createTable(n) {
  const tableContainer = document.getElementById("tableContainer");
  const table = document.createElement("table");

  for (let i = 0; i < n; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < n; j++) {
      const cell = document.createElement("td");
      cell.textContent = `${i + 1}, ${j + 1}`;
      row.appendChild(cell);
      if(i===j || i+j===n-1|| (i>j && i+j<n-1)||(j>i && j+i>n-1)){
        cell.style.backgroundColor="green";
      }
    }
    table.appendChild(row);
  }
  tableContainer.appendChild(table);
}


createTable(7);
