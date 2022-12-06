import { createSlice } from '@reduxjs/toolkit';
// import { ContactsState } from 'constance/contacts';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.unshift(payload);
    },
    [addContact.rejected](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;

      const index = state.contacts.items.findIndex(
        contact => contact.id === payload.id
      );

      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
  },
  reducers: {
    filterContacts: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
