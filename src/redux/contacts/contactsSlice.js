import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  patchContact,
  deleteContact,
} from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilled)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilled)
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(patchContact.pending, handlePending)
      .addCase(patchContact.fulfilled, handleFulfilled)
      .addCase(patchContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
