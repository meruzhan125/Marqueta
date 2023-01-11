import "./cell.css";
import { CellStatusEnum, CellValueEnum, GameStatusEnum } from "../enums";
import { useRecoilState, useSetRecoilState } from "recoil";
import { gameState, gameStatusState } from "../recoil_state";
import _ from "lodash";

export default function Cell({ cell }) {
  const setGameStatus = useSetRecoilState(gameStatusState);
  const [game, setGame] = useRecoilState(gameState);

  const handleClick = () => {
    console.log(cell);
    // if cell value is mine, game over
    if (cell.value === CellValueEnum.Mine) {
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
      return;
    }
    // if cell value is zero, reveal all neighbors
    if (cell.value === CellValueEnum.Zero) {
      // reveal all neighbors
      const newGame = _.cloneDeep(game);
      newGame[cell.r][cell.c].status = CellStatusEnum.Revealed;
      setGame(newGame);
    }

    // if cell value is not zero, reveal cell
    if (cell.value !== CellValueEnum.Zero) {
      // reveal cell
      const newGame = _.cloneDeep(game);
      newGame[cell.r][cell.c].status = CellStatusEnum.Revealed;
      setGame(newGame);
    }
  };

  return (
    <div className='cell' onClick={handleClick}>
      {cell.status === CellStatusEnum.Revealed ? cell.value : null}
    </div>
  );
}
