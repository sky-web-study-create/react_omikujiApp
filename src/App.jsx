import './App.css';
import {useState} from "react";

export const App = () => {

  //ボタンの初期値を?に設定。クリックで状態変われば更新
  const [result, setResult] = useState("?");
  //おみくじ結果の配列
  const omikujiArray = ["大吉", "中吉", "吉", "凶"];

  const onClickButton = () => {
    const randomNum = Math.floor(Math.random() * omikujiArray.length);
    setResult(omikujiArray[randomNum]);
  }

  return (
    <div class="App" onClick={onClickButton}>
      {result}
    </div>
  );
}
