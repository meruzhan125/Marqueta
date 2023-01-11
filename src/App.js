import "./styles.css";
import React from "react";
import { RecoilRoot } from "recoil";
import BombsGame from "./BombsGame";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BombsGame />
      </RecoilRoot>
    </div>
  );
}
