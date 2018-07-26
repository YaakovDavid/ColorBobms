console.log('up and running');
const cells = $('.square')
const cellArr = Array.from($('.square'));
console.log(cellArr);


function grid() {
  minefield = {
    rows: 8,
    columns: 8,
    cells: cellArr
  }
  return minefield;
}

function initializeGrid(grid) {
  // create each cell in the grid
  for (var y = 0; y <= grid.rows; y++) {
    for (var x = 0; x <= grid.columns; x++) {
      var cell = getNewCell(x, y);
      initializeCell(cell);
      grid.cells[x + (y * 9)] = cell;
    }
  }
  // have each cell check it's neighboring cells to see if they have bombs
  for (var y = 0; y < grid.rows; y++) {
    var bstr = "";
    var str = "";
    for (var x = 0; x < grid.columns; x++) {
      checkOutNeighbors(grid.cells[x + (y * 9)], grid);
      if (grid.cells[x + (y * 9)].bomb) {
        bstr = bstr + "B";
      } else {
        bstr = bstr + "+";
      }
      str = str + grid.cells[x + (y * 9)].neighboringCells;
    }
    console.log(bstr + "    -    " + str);
  }
}

function getNewCell(xValue, yValue) {
  newCell = {
    x: xValue,
    y: yValue,
    bomb: false,
    neighboringCells: "g",
    foundDanger: false
  }
  return newCell;
}

function initializeCell(cell) {
  var randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber <= 1) {
    cell.bomb = true;
  }
}

function checkOutNeighbors(cell, grid) {
  checkNorth(cell, grid);
  if (cell.foundDanger) {
    return;
  }
  checkSouth(cell, grid)
  if (cell.foundDanger) {
    return;
  }
  checkWest(cell, grid)
  if (cell.foundDanger) {
    return;
  }
  checkEast(cell, grid)
  if (cell.foundDanger) {
    return;
  }
  checkNorthWest(cell, grid);
  if (cell.foundDanger) {
    return;
  }
  checkNorthEast(cell, grid);
  if (cell.foundDanger) {
    return;
  }
  checkSouthEast(cell, grid);
  if (cell.foundDanger) {
    return;
  }
  checkSouthWest(cell, grid);
  if (cell.foundDanger) {
    return;
  }
}

function checkNorth(cell, grid) {
  if (cell.y > 0) {
    var aCell = grid.cells[cell.x + ((cell.y - 1) * 9)];
    if (check(aCell, grid)) {
      cell.neighboringCells = 'r';
      cell.foundDanger = true;
    }
  }
}

function checkSouth(cell, grid) {
  if (cell.y < grid.rows) {
    var aCell = grid.cells[cell.x + ((cell.y + 1) * 9)];
    if (check(aCell, grid)) {
      cell.neighboringCells = 'r';
      cell.foundDanger = true;
    }
  }
}

function checkWest(cell, grid) {
  if (cell.x > 0) {
    var aCell = grid.cells[(cell.x - 1) + (cell.y * 9)];
    if (check(aCell, grid)) {
      cell.neighboringCells = 'r';
      cell.foundDanger = true;
    }
  }
}

function checkEast(cell, grid) {
  if (cell.x < grid.columns) {
    var aCell = grid.cells[(cell.x + 1) + (cell.y * 9)];
    if (check(aCell, grid)) {
      cell.neighboringCells = 'r';
      cell.foundDanger = true;
    }
  }
}

function checkNorthWest(cell, grid) {
  if (cell.x > 0 && cell.y > 0) {
    var aCell = grid.cells[(cell.x - 1) + ((cell.y - 1) * 9)];
    if (check(aCell, grid)) {
      cell.neighboringCells = 'o';
      cell.foundDanger = true;
    }
  }
}

function checkNorthEast(cell, grid) {
  if (cell.x < grid.columns && cell.y > 0) {
    var aCell = grid.cells[(cell.x + 1) + ((cell.y - 1) * 9)];
    if (check(aCell, grid)) {
      cell.neighboringCells = 'o';
      cell.foundDanger = true;
    }
  }
}

function checkSouthEast(cell, grid) {
  if (cell.x < grid.columns && cell.y < grid.rows) {
    var aCell = grid.cells[(cell.x + 1) + ((cell.y + 1) * 9)];
    if (check(aCell, grid)) {
      cell.neighboringCells = 'o';
      cell.foundDanger = true;
    }
  }
}

function checkSouthWest(cell, grid) {
  if (cell.x > 0 && cell.y < grid.rows) {
    var aCell = grid.cells[(cell.x - 1) + ((cell.y + 1) * 9)];
    if (check(aCell, grid)) {
      cell.neighboringCells = 'o';
      cell.foundDanger = true;
    }
  }
}

function check(neighbor, aGrid) {
  return neighbor.bomb;
}

function onClick() {
  if (this.hasBomb) {
    return 'black';
  }
  return cell.neighboringCells;
}

var grid = new grid();
initializeGrid(grid);
// alert(grid.cells[3, 4].neighboringCells);
