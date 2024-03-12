import { createSelector } from '@reduxjs/toolkit';

export const filterSelector = state => state.filter.filter;
export const phoneBookSelector = state => state.phoneBook.phoneBook;
export const isLoadingSelector = state => state.phoneBook.isLoading;
export const errorSelector = state => state.phoneBook.error;

export const filteredContactsSelector = createSelector(
  [phoneBookSelector, filterSelector],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(normalizedFilter)
    );
  }
);
