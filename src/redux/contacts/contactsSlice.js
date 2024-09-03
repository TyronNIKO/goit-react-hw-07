import {createSlice} from "@reduxjs/toolkit";

const createCustomId = state => {
    let value = state.items.length ? state.items[state.items.length - 1].id.replace(/\D/g, "") + 1 : 1;
    return `id-${value}`;
};
const contactsSlice = createSlice({
    name: "contacts",
    initialState: {items: []},
    reducers: {
        addContact: {
            // prepare: contact => {
            //     console.log(contact);

            //     return {payload: {...contact, id: createCustomId(state)}};
            // },
            reducer: (state, action) => {
                // state.items.push(action.payload);
                state.items.push({id: createCustomId(state), ...action.payload});
            },
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
});
export const contactsReducer = contactsSlice.reducer;
export const {addContact, deleteContact, changeFilter} = contactsSlice.actions;

// export const contactsReducer = (state = INITIAL_STATE, action) => {
//     console.log(action);

//     switch (action.type) {
//         case "contacts/add":
//             return {
//                 ...state,
//                 contacts: [
//                     ...state.contacts,
//                     {
//                         id: createCustomId(state),
//                         ...action.payload,
//                     },
//                 ],
//             };
//         case "contacts/delete":
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== action.payload),
//             };
//         case "contacts/changeFilter":
//             return {
//                 ...state,
//                 filter: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export const addContact = payload => {
//     return {
//         type: "contacts/add",
//         payload: payload,
//     };
// };

// export const deleteContact = contactId => {
//     return {
//         type: "contacts/delete",
//         payload: contactId,
//     };
// };
// export const changeFilter = payload => {
//     return {
//         type: "contacts/changeFilter",
//         payload: payload,
//     };
// };
