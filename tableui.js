const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
    { id: 3, name: "Charlie Lee", email: "charlie@example.com", role: "Editor" },
    { id: 4, name: "Diana Cruz", email: "diana@example.com", role: "User" },
  ];
  
  const tableBody = document.querySelector("#userTable tbody");
  const searchInput = document.getElementById("searchInput");
  const headers = document.querySelectorAll("th");
  
  let currentSort = { column: null, ascending: true };
  
  function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(user => {
      const row = `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
        </tr>
      `;
      tableBody.insertAdjacentHTML("beforeend", row);
    });
  }
  
  function sortTable(column) {
    const ascending = currentSort.column === column ? !currentSort.ascending : true;
    currentSort = { column, ascending };
  
    users.sort((a, b) => {
      if (a[column] > b[column]) return ascending ? 1 : -1;
      if (a[column] < b[column]) return ascending ? -1 : 1;
      return 0;
    });
  
    renderTable(filteredData());
  }
  
  function filteredData() {
    const query = searchInput.value.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(query)
    );
  }
  
  searchInput.addEventListener("input", () => {
    renderTable(filteredData());
  });
  
  headers.forEach(header => {
    header.addEventListener("click", () => {
      sortTable(header.dataset.column);
    });
  });
  
  renderTable(users);
  