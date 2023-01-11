export const GameStatusEnum = {
  Closed: 0,
  Playing: 1,
  Won: 2,
  Lost: -1
};

export const GameSizeEnum = {
  S: { label: "S", value: { c: 12, r: 9 } },
  M: { label: "M", value: { c: 18, r: 15 } },
  L: { label: "L", value: { c: 27, r: 24 } }
};

export const GameDiffEnum = {
  Easy: { label: "🐶", value: 0.05 },
  Normal: { label: "🦁", value: 0.1 },
  Hard: { label: "🦍", value: 0.15 }
};

export const CellStatusEnum = {
  Void: -1,
  Fresh: 0,
  Revealed: 1,
  Flag: 2
};

export const CellValueEnum = {
  Void: -1,
  Zero: '🟩',
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Mine: "💣"
};

export const CellTemplateEnum = {
  Fresh: {
    status: CellStatusEnum.Fresh,
    v: CellValueEnum.Zero,
    r: 0,
    c: 0
  },
  Void: { status: CellStatusEnum.Void, v: CellValueEnum.Void, r: -1, c: -1 }
};

export const DirectionsEnum = {
  N: { key: "N", x: 0, y: -1 },
  NE: { key: "NE", x: 1, y: -1 },
  E: { key: "E", x: 1, y: 0 },
  SE: { key: "SE", x: 1, y: 1 },
  S: { key: "S", x: 0, y: 1 },
  SW: { key: "SW", x: -1, y: 1 },
  W: { key: "W", x: -1, y: 0 },
  NW: { key: "NW", x: -1, y: -1 },
  C: { key: "C", x: 0, y: 0 }
};
