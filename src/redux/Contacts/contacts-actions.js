import types from "./contacts-types";
import { v4 as uuidv4 } from "uuid";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: { id: uuidv4(), name, number },
});

const onDeleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const onChangeFilter = (value) => ({
  type: types.FILTER,
  payload: value,
});
export { addContact, onDeleteContact, onChangeFilter };
