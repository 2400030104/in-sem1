const searchInput = document.getElementById('searchInput');
const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

searchInput.addEventListener('input', function () {
  const filter = this.value.trim().toLowerCase();

  for (let row of table.rows) {
    const roll = row.cells[0].textContent.toLowerCase();
    const name = row.cells[1].textContent.toLowerCase();

    if (roll.includes(filter) || name.includes(filter)) {
      row.classList.remove('hidden');
    } else {
      row.classList.add('hidden');
    }
  }
});
