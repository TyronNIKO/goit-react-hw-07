import {configureStore} from "@reduxjs/toolkit";
import {contactsReducer} from "./contacts/contactsSlice";
import {filtersReducer} from "./filters/filtersSlice";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"], // blacklist: ["showProfilesList"]
};

const filtersConfig = {
    key: "filters",
    storage,
    whitelist: ["name"], // blacklist: ["showProfilesList"]
};

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsConfig, contactsReducer),
        filters: persistReducer(filtersConfig, filtersReducer),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
