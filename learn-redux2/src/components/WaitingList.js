import React from "react";
import "./WaitingList.css";

const WaitingItem = ({ text, entered, onEnter, onLeave }) => (
  <li>
    <div className={`text ${entered ? "entered" : ""}`}>{text}</div>
    <div className="buttons">
      <button type="button" onClick={onEnter}>입장</button>
      <button type="button" onClick={onLeave}>나감</button>
    </div>
  </li>
  );

const WaitingList = ({
  input,
  waitingList,
  onChange,
  onSubmit,
  onEnter,
  onLeave
}) => {
  const waitingItems = waitingList.map(w => (
    <WaitingItem
      key={w.id}
      text={w.name}
      entered={w.entered}
      id={w.id}
      onEnter={() => onEnter(w.id)}
      onLeave={() => onLeave(w.id)}
    />
  ));
  return (
    <div className="WaitingList">
      <h2>대기자 명단</h2>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <ul>{waitingItems}</ul>
    </div>
  );
};

export default WaitingList;
