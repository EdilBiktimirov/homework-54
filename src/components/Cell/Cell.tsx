import React from 'react';
import './Cell.css'

interface Props extends React.PropsWithChildren {
 onCellClick: React.MouseEventHandler;
 clicked: boolean;
 hasItem: boolean;
}

const Cell: React.FC<Props> = ({onCellClick, clicked, hasItem}) => {
  const cellClasses = ['Cell'];

    if (clicked) {
      cellClasses.push('clicked');
    }
    if (clicked && hasItem) {
      cellClasses.push('clicked', 'bomb');
    }

  return (
    <div className={cellClasses.join(' ')} onClick={onCellClick}>
    </div>
  );
};

export default Cell;