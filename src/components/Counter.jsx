import { useState } from "react";
import "./Counter.css";

const Counter = ({
  title,
  value,
  onIncrement,
  onDecrement,
  onReset,
  onStartValueSet,
  onTitleSet,
  onDelete,
}) => {
  const [isSelectingStartValue, setIsSelectingStartValue] = useState(false);
  const [startValue, setStartValue] = useState(0);

  const [isSelectingTitle, setIsSelectingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState("");

  const handleStartValueButtonClick = () => {
    setIsSelectingStartValue(true);
    setStartValue(0);
  };

  const handleStartValueSelect = () => {
    onStartValueSet(startValue);
    setIsSelectingStartValue(false);
  };

  const handleCounterNameBtnClick = () => {
    setIsSelectingTitle(true);
  };

  const handleCounterTitleSelect = () => {
    onTitleSet(titleValue);
    setIsSelectingTitle(false);
  };

  return (
    <div className="cContainer">
      <button className="cDeleteBtn" onClick={onDelete}>
        X
      </button>
      <div className="cTitle">{title}</div>
      <input className="cValue" type="number" value={value} />
      <div className="cButtons">
        <button className="cBtn" onClick={onDecrement}>
          -
        </button>
        <button className="cBtn" onClick={onIncrement}>
          +
        </button>
      </div>
      <button className="cBtn" onClick={onReset}>
        Reset Counter
      </button>
      {!isSelectingStartValue && (
        <button className="cBtn" onClick={handleStartValueButtonClick}>
          Start Value
        </button>
      )}
      {isSelectingStartValue && (
        <div className="cValueSelect">
          <input
            type="number"
            value={startValue}
            onChange={(e) => setStartValue(e.target.value)}
          />
          <button className="cBtn" onClick={handleStartValueSelect}>
            Set
          </button>
        </div>
      )}
      {!isSelectingTitle && (
        <button className="cBtn" onClick={handleCounterNameBtnClick}>
          Counter Name
        </button>
      )}
      {isSelectingTitle && (
        <div className="cValueSelect">
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <button className="cBtn" onClick={handleCounterTitleSelect}>
            Set
          </button>
        </div>
      )}
    </div>
  );
};

export default Counter;
