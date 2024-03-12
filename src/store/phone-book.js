import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const INITIAL_STATE = {
  phoneBook: [],
  isLoading: false,
  error: null,
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.phoneBook = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.phoneBook.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.phoneBook = state.phoneBook.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('pending'),
        state => {
          state.isLoading = true;
        }
      );
  },
});

export default phoneBookSlice;
