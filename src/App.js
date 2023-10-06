import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import "./App.css";
import {
  addCounter,
  decNumber,
  deleteCounter,
  incNumber,
  reset,
  setTitle,
  setValue,
} from "./actions";

const App = () => {
  const counters = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const handleCounterAdd = () => {
    dispatch(addCounter());
  };

  const handleIncrement = (index) => {
    dispatch(incNumber(index));
  };
  const handleDecrement = (index) => {
    dispatch(decNumber(index));
  };

  const handleReset = (index) => {
    dispatch(reset(index));
  };

  const handleStartValueSet = (index, value) => {
    dispatch(setValue(index, value));
  };

  const handleTitleSet = (index, title) => {
    dispatch(setTitle(index, title));
  };

  const handleDelete = (index) => {
    dispatch(deleteCounter(index));
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
