import { combineReducers } from "redux";
// import types from "./contacts-types";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";
const items = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.onDeleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});
const filter = createReducer("", {
  [actions.onChangeFilter]: (_, action) => action.payload,
});
export default combineReducers({
  items,
  filter,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contacts/Filter":
//       return payload;

//     default:
//       return state;
//   }
// };
