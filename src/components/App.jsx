// src/App.jsx
import "./App.css";

import Section from "./Section";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

const App = () => {
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
                <ContactList />
            </Section>
        </>
    );
};

export default App;
