import React from 'react';
import './ResetBtn.css';

interface Props extends React.PropsWithChildren{
onBtnClick: React.MouseEventHandler;
}

const ResetBtn: React.FC<Props>  = ({onBtnClick}) => {

  return (
    <div>
<button className={"ResetBtn"} onClick={onBtnClick}>Reset</button>
    </div>
  );
};

export default ResetBtn;