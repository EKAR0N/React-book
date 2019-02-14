import * as React from "react";

interface Props {
  handleChange(e: React.FormEvent<HTMLInputElement>): void;
  handleClick(e: React.FormEvent<HTMLFormElement>): void;
  value: string;
}

const TodoInput: React.SFC<Props> = ({ handleChange, handleClick, value }) => {
  return (
    <div>
      <form onSubmit={handleClick}>
        <input value={value} onChange={handleChange} placeholder="TodoList" />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default TodoInput;
