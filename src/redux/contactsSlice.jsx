import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../../initialContacts.json";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;


// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { contacts: [] },
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     removeContact(state, action) {
//       return {
//         contacts: state.contacts.filter(item => item.id !== action.payload),
//       };
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, removeContact } = contactsSlice.actions;
// export const selectContacts = (state) => state.contacts.contacts;