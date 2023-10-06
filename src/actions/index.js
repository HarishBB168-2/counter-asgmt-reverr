export const addCounter = () => ({
  type: "ADD_COUNTER",
  payload: { data: { title: "Tally Counter", value: 0 } },
});

export const incNumber = (index) => ({
  type: "INCREMENT",
  payload: { index },
});

export const decNumber = (index) => ({
  type: "DECREMENT",
  payload: { index },
});

export const reset = (index) => ({
  type: "RESET",
  payload: { index },
});

export const setValue = (index, value) => ({
  type: "SET_VALUE",
  payload: { index, value },
});

export const setTitle = (index, title) => ({
  type: "SET_TITLE",
  payload: { index, title },
});

export const deleteCounter = (index) => ({
  type: "DELETE",
  payload: { index },
});
