import React, {useState} from 'react';
import './App.css';
import Field from "./components/Field/Field";

function App() {
  const createItems = () => {
    const cells: Cell[] = [];

    for (let i = 0; i < 36; i++) {
      const cell: Cell = {hasItem: false, clicked: false, id: i};
      cells.push(cell);
    }
    const randomIndex = Math.floor(Math.random() * 37);

    cells[randomIndex].hasItem = true;
    return cells;
  };


  const [items, setItems] = useState(createItems());
  console.log(items)

  const changeSell = (id: number) => {
    const copyCells = [...items];


    copyCells.forEach((element) => {
      if (element.id === id){
        element.clicked = true;


        setItems(copyCells);
      }});
  }


  return (
    <div className="App">
      <Field cells={items} changeCell={changeSell}/>
    </div>
  );
}

export default App;
