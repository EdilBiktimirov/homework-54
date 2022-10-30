import React from 'react';
import Cell from "../Cell/Cell";
import './Field.css'

interface Props extends React.PropsWithChildren{
  cells: Cell[];
  changeCell: (id: number) => void;
}

const Field: React.FC<Props> = ({cells, changeCell}) => {

  return (
    <div className="Field">
    {cells.map((cell) => (
      <Cell
        key={cell.id}
        clicked={cell.clicked}
        hasItem={cell.hasItem}
        onCellClick={() => changeCell(cell.id)}
     />
      ))}
    </div>
  );
};

export default Field;