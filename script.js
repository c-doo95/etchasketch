const container = document.querySelector('.container');

function createGrid(dimension) {
  for (let i = 0; i < dimension; i++) {
    const row = document.createElement('div');
    row.id = 'row';
    for (let i = 0; i < dimension; i++) {
      const cell = document.createElement('div');
      cell.id = 'cell';
      row.appendChild(cell);
    };
    container.appendChild(row);
  };
};

createGrid(5);