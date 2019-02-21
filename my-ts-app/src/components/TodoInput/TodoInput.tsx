import * as React from 'react';

interface Props {
  handleChange(e: React.FormEvent<HTMLInputElement>): void;
  handleClick(e: React.FormEvent<HTMLFormElement>): void;
  value: string;
}

interface State {
  input: string;
}

// const TodoInput: React.SFC<Props> = ({ handleChange, handleClick, value }) => {
//   return (
//     <div>
//       <form onSubmit={handleClick}>
//         <input onChange={handleChange} placeholder="TodoList" />
//         <button type="submit">Apply</button>
//       </form>
//     </div>
//   );
// };

class TodoInput extends React.Component<Props, State> {
  state: State = {
    input: ''
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    this.setState(() => ({
      input: value
    }));
  }

  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <form onSubmit={handleClick}>
          <input  placeholder="TodoList" />
          <button type="submit">Apply</button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
