import { createSlice } from "@reduxjs/toolkit";

const addItemToArray = (state, action) => {
  // [...state.contacts, action.payload];
  // state.contacts += action.payload;
  const isExistInContacts = state.contacts.find(
    (con) => con.id === action.payload.id
  );
  if (!isExistInContacts) {
    state.contacts.push(action.payload);
    console.log("added");
  }
};
const removeFromArray = (state, { payload }) => {
  state.contacts = state.contacts.filter(
    (contact) => contact.id !== payload.id
  );
  console.log("remove");
};
const selectAllContacts = (state, { payload }) => {
  state.contacts = payload;
};
const deSelectAll = (state, { payload }) => {
  state.contacts = payload;
};
const searchhandler = (state, { payload }) => {
  state.search = payload;
};
const initialState = {
  contacts: [],
  search: "",
};

export const CheckedSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    todoAdded: addItemToArray,
    todoRemoved: removeFromArray,
    selectAll: selectAllContacts,
    selectNone: deSelectAll,
    startSearch: searchhandler,
  },
});
export const { todoAdded, todoRemoved, selectAll, selectNone, startSearch } =
  CheckedSlice.actions;
export default CheckedSlice.reducer;
