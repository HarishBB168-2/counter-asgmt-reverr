import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

const App = () => {
  const [counters, setCounters] = useState([]);

  const handleCounterAdd = () => {
    setCounters([{ title: "Tally Counter", value: 0 }, ...counters]);
  };

  const handleIncrement = (index) => {
    const newCounters = [...counters];
    ++newCounters[index].value;
    setCounters(newCounters);
  };
  const handleDecrement = (index) => {
    const newCounters = [...counters];
    --newCounters[index].value;
    setCounters(newCounters);
  };

  const handleReset = (index) => {
    console.log("index :>> ", index);
    const newCounters = [...counters];
    newCounters[index].value = 0;
    console.log("newCounters[index] :>> ", newCounters[index]);
    setCounters(newCounters);
  };

  const handleStartValueSet = (index, value) => {
    const newCounters = [...counters];
    newCounters[index].value = value;
    setCounters(newCounters);
  };

  const handleTitleSet = (index, title) => {
    const newCounters = [...counters];
    newCounters[index].title = title;
    setCounters(newCounters);
  };

  const handleDelete = (index) => {
    const newCounters = [...counters];
    setCounters(newCounters.filter((item, idx) => idx !== index));
  };

  return (
    <div className="appContainer">
      <button onClick={handleCounterAdd} className="addCounter">
        Add Counter
      </button>
      <div className="countersList">
        {counters.map((item, index) => (
          <Counter
            key={index}
            onDelete={() => handleDelete(index)}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
            onReset={() => handleReset(index)}
            onStartValueSet={(value) => handleStartValueSet(index, value)}
            onTitleSet={(title) => handleTitleSet(index, title)}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
