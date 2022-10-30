import React from 'react';

interface Props extends React.PropsWithChildren {
  count: number;
}

const Count: React.FC<Props> = ({count}) => {

  return (
    <div>
<span>Tries: {count}</span>
    </div>
  );
};

export default Count;