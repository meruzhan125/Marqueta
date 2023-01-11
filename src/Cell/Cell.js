import "./cell.css";
import { CellStatusEnum, CellValueEnum, GameStatusEnum } from "../enums";
import { useRecoilState, useSetRecoilState } from "recoil";
import { gameState, gameStatusState } from "../recoil_state";
import _ from "lodash";
import { getAllNeighbors } from "../utils";

export default function Cell({ cell }) {
  const setGameStatus = useSetRecoilState(gameStatusState);
  const [game, setGame] = useRecoilState(gameState);


  // lose game if cell is mine
  // reveal all cells
  // set game status to lost
  const loseGame = () => {
    // reveal all cells
    const newGame = _.cloneDeep(game);
    newGame.forEach((row) => {
      row.forEach((cell) => {
        cell.status = CellStatusEnum.Revealed;
      });
    });
    setGame(newGame);
    // set game status to lost
    setGameStatus(GameStatusEnum.Lost);
  };

  const reveal = (cell) => {
    const newGame = _.cloneDeep(game);
    newGame[cell.r][cell.c].status = CellStatusEnum.Revealed;
    // if cell value is mine, game over
    if (cell.v === CellValueEnum.Mine) {
      loseGame();
      return;
    }
    if (cell.v === CellValueEnum.Zero) {
      setGame(newGame);
      const neighbors = getAllNeighbors(newGame, cell).filter(
        (n) => n.v !== CellValueEnum.Mine
      );
      console.log(neighbors);
      neighbors.forEach((neighbor) => {
        reveal(neighbor);
      });
    }
  };

  const handleClick = () => {
    // if game is not playing, do nothing
    console.log(cell);
    // reveal cell
    reveal(cell);
  };

  return (
    <div className='cell' onClick={handleClick}>
      {cell.status === CellStatusEnum.Revealed ? cell.v : null}
    </div>
  );
}
