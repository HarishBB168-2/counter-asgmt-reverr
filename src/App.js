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
import {
  addDataToCollection,
  deleteDataFromCollection,
  getDataFromCollection,
  updateDataOfCollection,
} from "./services/firebaseService";
import { useEffect, useRef } from "react";

const App = () => {
  useEffect(() => {
    const loadData = async () => {
      const data = await getDataFromCollection("counters");

      console.log("data :>> ", data);
    };
    loadData();
  }, []);

  const updateInput = useRef(null);
  const deleteInput = useRef(null);

  const testRead = async () => {
    const data = await getDataFromCollection("counters");
    console.log("data :>> ", data);
  };

  const testCreate = async () => {
    const data = await addDataToCollection("counters", {
      title: String(new Date()),
      value: 12,
    });
    await testRead();
  };

  const testUpdate = async () => {
    const data = await getDataFromCollection("counters");
    const value = deleteInput.current.value;
    const id = updateInput.current.value;
    const obj = data.find((item) => item.id === id);
    obj.title = value;
    console.log("obj :>> ", obj);
    await updateDataOfCollection("counters", obj);
    await testRead();
  };

  const testDelete = async () => {
    const id = deleteInput.current.value;
    await deleteDataFromCollection("counters", id);
    await testRead();
  };

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
      <div>
        <button onClick={testRead}>Read</button>
        <button onClick={testCreate}>Create</button>
        <button onClick={testUpdate}>Update</button>
        <input type="text" placeholder="Id to update" ref={updateInput} />
        <button onClick={testDelete}>Delete</button>
        <input type="text" placeholder="Id to delete" ref={deleteInput} />
      </div>
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
