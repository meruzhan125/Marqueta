import Controls from "./Controls/Controls";
import Board from "./Board/Board";

export default function BombsGame() {
  return (
    <div className="game">
      <Controls />
      <Board />
    </div>
  );
}
