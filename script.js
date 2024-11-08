const container = document.querySelector('.container');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(dimension) {
  for (let i = 0; i < dimension; i++) {
    const row = document.createElement('div');
    row.id = 'row';
    for (let i = 0; i < dimension; i++) {
      const cell = document.createElement('div');
      cell.id = 'cell';
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getRandomColor();
      });
      row.appendChild(cell);
    };
    container.appendChild(row);
  };
};

createGrid(10);