import * as React from 'react';
import styled from 'styled-components';

interface Props {

}

const Template = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TodoTemplate: React.SFC<Props> = ({ children }) => {
  return (
    <Template>
      {children}
    </Template>
  );
}

export default TodoTemplate;
