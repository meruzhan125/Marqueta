import "./board.css";
import Cell from "../Cell/Cell";
import { useRecoilValue } from "recoil";
import { gameState } from "../recoil_state";

export default function GameBoard() {
  const game = useRecoilValue(gameState);
  return (
    <div className="board">
      {game.length > 0 &&
        game.map((r, y) => (
          <div className="row" key={`r-${y}`}>
            {r.map((c, x) => (
              <Cell key={`c-${y}-${x}`} cell={c} />
            ))}
          </div>
        ))}
    </div>
  );
}
