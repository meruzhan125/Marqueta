import "./controls.css";

import { useRecoilState, useSetRecoilState } from "recoil";

import {
  GameSizeEnum as sizes,
  GameDiffEnum as diffs,
  GameStatusEnum
} from "../enums";
import {
  gameSizeState,
  gameDiffState,
  gameStatusState,
  gameState
} from "../recoil_state";
import { createGameBoard } from "../utils";

export default function Controls() {
  const [size, setSize] = useRecoilState(gameSizeState);
  const [diff, setDiff] = useRecoilState(gameDiffState);

  const setGame = useSetRecoilState(gameState);

  const setGameStatus = useSetRecoilState(gameStatusState);

  const newGame = () => {
    const g = createGameBoard(size, diff);
    setGame(g);
    setGameStatus(GameStatusEnum.Playing);
  };

  return (
    <div className="controls-wrapper">
      {Object.values(sizes).map((s) => (
        <div
          key={s.label}
          onClick={() => setSize(s)}
          className={s === size ? "btn active" : "btn"}
        >
          {s.label}
        </div>
      ))}
      <br />
      {Object.values(diffs).map((d) => (
        <div
          key={d.label}
          onClick={() => setDiff(d)}
          className={d === diff ? "btn active" : "btn"}
        >
          {d.label}
        </div>
      ))}
      <div onClick={newGame} className="btn">
        New Game
      </div>
    </div>
  );
}
