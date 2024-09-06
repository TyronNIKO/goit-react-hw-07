// src/App.jsx
import "./App.css";

import Section from "./Section";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ErrorMsg from "./ErrorMsg/ErrorMsg";
import Loader from "./Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchContacts} from "../redux/contactsThunk";
import {selectContacts, selectError, selectLoading} from "../redux/contactsSlice";

const App = () => {
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <>
            <Section name="header-section" container>
                <h1 className="title">Phonebook</h1>
            </Section>
            <Section name="form-section" container>
                <ContactForm />
            </Section>
            <Section name="search-section" container>
                <SearchBox />
            </Section>
            <Section name="contactlist-section" container>
                {error && <ErrorMsg />}
                {loading && <Loader />}
                {contacts.length > 0 && <ContactList />}
            </Section>
        </>
    );
};

export default App;
