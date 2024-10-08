import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://66db43c7f47a05d55be78cd4.mockapi.io/api/v1/",
});

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const {data} = await axios.get("/contacts");
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/contacts/${id}`);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const {data} = await axios.post("/contacts", contact);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
