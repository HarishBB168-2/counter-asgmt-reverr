const initialState = [];

const counterReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_COUNTER":
      return [action.payload.data, ...state];
    case "INCREMENT":
      newState = [...state];
      ++newState[action.payload.index].value;
      return newState;
    case "DECREMENT":
      newState = [...state];
      --newState[action.payload.index].value;
      return newState;
    case "RESET":
      newState = [...state];
      newState[action.payload.index].value = 0;
      return newState;
    case "SET_VALUE":
      newState = [...state];
      newState[action.payload.index].value = action.payload.value;
      return newState;
    case "SET_TITLE":
      newState = [...state];
      newState[action.payload.index].title = action.payload.title;
      return newState;
    case "DELETE":
      newState = [...state];
      return newState.filter((_, idx) => idx !== action.payload.index);
    default:
      return state;
  }
};
export default counterReducer;
