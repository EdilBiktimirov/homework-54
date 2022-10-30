import React, {useState} from 'react';
import './App.css';
import Field from "./components/Field/Field";
import ResetBtn from "./components/ResetBtn/ResetBtn";
import Count from "./components/Count/Count";

function App() {
  const [count, setCount] = useState({
    count: 0,
  });

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
  console.log(items)


  const changeSell = (id: number) => {
    const copyCells = [...items];
    const copyCount = {...count};


    for (let i = 0; i < copyCells.length; i++) {
      if (copyCells[i].id === id) {
        const copyCell = {...copyCells[i]};
        copyCell.clicked = true;
        copyCells[i] = copyCell;
        setItems(copyCells);

        copyCount.count++;
        setCount(copyCount);
      }}};

  const reset = () => {
    setItems(createItems());

    const copyCount = {...count};
    copyCount.count = 0;
    setCount(copyCount);
  }

  return (
    <div className="App">
      <Field cells={items} changeCell={changeSell}/>
      <Count count={count.count}/>
      <ResetBtn onBtnClick={reset}/>
    </div>
  );
}

export default App;
