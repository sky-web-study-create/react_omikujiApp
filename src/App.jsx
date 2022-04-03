import './App.css';
import { useState } from "react";

export const App = () => {

  const [result, setResult] = useState("?");
  const omikujiArray = ["大吉", "中吉", "吉", "凶"];

  const onClickButton = () => {
    const randomNum = Math.floor(Math.random() * omikujiArray.length);
    setResult(omikujiArray[randomNum]);
  }

  return (
    <div id="App" onClick={onClickButton}>
      {result}
    </div>
  );
}
