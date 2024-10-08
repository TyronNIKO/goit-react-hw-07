import {createSelector, createSlice} from "@reduxjs/toolkit";
import {addContact, deleteContact, fetchContacts} from "./contactsOps";
import {filterValue} from "./filtersSlice";

const handlePending = state => {
    state.error = null;
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {items: [], loading: false, error: null},
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.unshift(action.payload);
            })
            .addCase(addContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;
export const filteredContacts = createSelector([selectContacts, filterValue], (contacts, filter) => {
    return contacts.filter(contact => {
        const input = `${contact.name ?? ""} ${contact.number ?? ""}`;
        return input.toLowerCase().includes(filter.toLowerCase());
    });
});
