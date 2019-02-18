import * as React from 'react';
import styled from 'styled-components';

const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  text: string;
  done: boolean;
  handleRemove(): void;
  handleDone(): void;
}

const TodoItem: React.SFC<Props> = ({ text, done, handleRemove, handleDone }) => {
  return (
    <ItemDiv>
      <div onClick={handleDone} style={ done ? { textDecoration: 'line-through', color: 'red' } : {} }>
        {text}
      </div>
      <div style={{ color: 'red', margin: '0 0.5rem 0 0.5rem'}} onClick={handleRemove}>
        X
      </div>
    </ItemDiv>
  );
}

export default TodoItem;
