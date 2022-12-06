import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectError = state => state.contacts.contacts.error;
export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const normilizedFilter = filterValue ? filterValue.toLowerCase() : '';

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  }
);
