import { createSlice, nanoid } from "@reduxjs/toolkit";
import { ContactsState } from "constance/contacts";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: ContactsState,
    filter: "",
  },
  reducers: {
    addContact: {
      reducer({ contacts }, action) {
        contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact({ contacts }, action) {
      const index = contacts.findIndex(
        (contact) => contact.id === action.payload
      );
      contacts.splice(index, 1);
    },
    filterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
