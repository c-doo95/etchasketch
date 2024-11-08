const container = document.querySelector('.container');

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
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
      cell.style.opacity = 0;
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getRandomColor();
        let currentOpacity = cell.style.opacity;
        if (currentOpacity < 1) {
          cell.style.opacity = Number(currentOpacity) + 0.1;
        }
        cell.style.opacity += 0.1;
      });
      row.appendChild(cell);
    };
    container.appendChild(row);
  };
};

createGrid(10);
