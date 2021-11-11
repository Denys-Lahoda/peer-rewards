import actionTypes from "./actionTypes";

export default function (state, action) {
  switch (action.type) {
    case actionTypes.setData: {
      return [...action.data];
    }
    case actionTypes.addItem: {
      return [...state, action.item];
    }
    default: {
      return state;
    }
  }
}
