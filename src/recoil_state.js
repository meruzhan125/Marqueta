import { atom } from "recoil";

import { GameStatusEnum, GameSizeEnum, GameDiffEnum } from "./enums";

const gameStatusState = atom({
  key: "gameStatus",
  default: GameStatusEnum.Closed
});

const gameSizeState = atom({
  key: "gameSizeState",
  default: GameSizeEnum.S
});

const gameDiffState = atom({
  key: "gameDIffState",
  default: GameDiffEnum.Easy
});

const gameState = atom({
  key: "gameState",
  default: []
});

export { gameStatusState, gameSizeState, gameDiffState, gameState };
