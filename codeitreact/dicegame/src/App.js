import { useState } from 'react';
import Board from './Board'
import Button from './Button';
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);  // 배열 (참조형이기 때문에)
  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherGameHistory, setOtherGameHistory] = useState([]);  // 배열 (참조형이기 때문에)
  
  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
    const nextOtherNum = random(6);
    setOtherNum(nextOtherNum);
    setOtherSum(otherSum + nextOtherNum);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  };

  return (
    <div className="App">
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name = "나" color="blue" num={num} sum={sum} gameHistory={gameHistory} />
        <Board name = "상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
      </div>
    </div>
  );
}

export default App;