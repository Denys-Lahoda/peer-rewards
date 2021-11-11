import actionTypes from "./actionTypes";

const setData = (data) => ({
  type: actionTypes.setData,
  data,
});

const addItem = (item) => ({
  type: actionTypes.addItem,
  item,
});

export { setData, addItem };
