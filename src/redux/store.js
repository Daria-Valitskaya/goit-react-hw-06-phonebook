import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducers from "./Contacts/contacts-reducer";

const rootReducer = combineReducers({
  contacts: contactReducers,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
