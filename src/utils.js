import {
  GameSizeEnum,
  CellTemplateEnum,
  CellValueEnum,
  GameDiffEnum,
  DirectionsEnum
} from "./enums";

// create blank board of specified size<GameSizeEnum>
const createBlankBoard = (size = GameSizeEnum.S) => {
  let result = [];

  for (let r = 0; r < size.value.r; r++) {
    result[r] = [];
    for (let c = 0; c < size.value.c; c++) {
      result[r].push({ ...CellTemplateEnum.Fresh, r, c });
    }
  }

  return result;
};

// add random mines according to set difficulty
const plantMines = (board, diff = GameDiffEnum.Easy) => {
  let result = board;

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (Math.random() < diff.value) result[r][c].value = CellValueEnum.Mine;
    }
  }

  return result;
};

// check if this cell is touching any edges
const detectEdges = (board, cell = CellTemplateEnum.Fresh) => {
  const result = {
    C: false,
    N: cell.r === 0,
    NE: cell.r === 0 || cell.c === board[0].length - 1,
    E: cell.c === board[0].length - 1,
    SE: cell.r === board.length - 1 || cell.c === board[0].length - 1,
    S: cell.r === board.length - 1,
    SW: cell.r === board.length - 1 || cell.c === 0,
    W: cell.c === 0,
    NW: cell.c === 0 || cell.r === 0
  };
  return result;
};

// get a neighbor at specified direction
const getNeighbor = (board, cell, dir = DirectionsEnum.C) => {
  const isEdge = detectEdges(board, cell)[dir.key];
  if (isEdge) return CellTemplateEnum.Void;
  return board[cell.r + dir.y][cell.c + dir.x];
};

// get all neighbors of a cell
const getAllNeighbors = (board, cell) => {
  let result = [];
  // iterate through DirectionsEnum
  Object.values(DirectionsEnum).forEach((dir) => {
    let neighbor = getNeighbor(board, cell, dir);
    result.push(neighbor);
  });
  return result;
};

// returns the number of neighboring mines
const valuateCell = (board, cell) => {
  const neighbors = getAllNeighbors(board, cell);
  const neighboringMines = neighbors.filter(
    (n) => n.value === CellValueEnum.Mine
  );
  const result = neighboringMines.length;
  return result;
};

// iterates through board and valuates each cell
const valuateBoard = (board) => {
  let result = board;

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      const cell = result[r][c];
      if (cell.value !== CellValueEnum.Mine) {
        cell.value = valuateCell(board, cell);
      }
    }
  }

  return result;
};

const createGameBoard = (size = GameSizeEnum.S, diff = GameDiffEnum.Easy) => {
  let board = createBlankBoard(size);
  board = plantMines(board, diff);
  board = valuateBoard(board);

  return board;
};

export { createGameBoard };
