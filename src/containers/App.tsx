import React, {useState} from 'react';
import './App.css';
import Field from "../components/Field/Field";
import ResetBtn from "../components/ResetBtn/ResetBtn";
import Count from "../components/Count/Count";

function App() {

  const createItems = () => {
    const cells: Cell[] = [];

    for (let i = 0; i < 36; i++) {
      const cell: Cell = {hasItem: false, clicked: false, id: i};
      cells.push(cell);
    }
    const randomIndex = Math.floor(Math.random() * 36);
    cells[randomIndex].hasItem = true;

    return cells;
  };

  const [items, setItems] = useState(createItems());
  const [count, setCount] = useState({count: 0, gameOver: false,});

  const changeSell = (id: number) => {
    const copyCells = [...items];
    const copyCount = {...count};

    if (!copyCount.gameOver) {
      for (let i = 0; i < copyCells.length; i++) {

        if (copyCells[i].id === id) {
          const copyCell = {...copyCells[i]};

          if (!copyCells[i].clicked) {
            copyCount.count++;
            setCount(copyCount);
          }
          copyCell.clicked = true;

          copyCells[i] = copyCell;
          setItems(copyCells);

          if (copyCells[i].clicked && copyCells[i].hasItem) {
            copyCount.gameOver = true;
            setCount(copyCount);
          }
        }
      }
    }
  };

  const reset = () => {
    setItems(createItems());

    const copyCount = {...count};
    copyCount.count = 0;
    copyCount.gameOver = false;
    setCount(copyCount);
  };

  let showResult: React.ReactNode = null;
  if (count.gameOver) {
    showResult = <span>Victory!</span>
  }

  return (
    <div className="App">
      <Field cells={items} changeCell={changeSell}/>
      {showResult}
      <Count count={count.count}/>
      <ResetBtn onBtnClick={reset}/>
    </div>
  );
}

export default App;
