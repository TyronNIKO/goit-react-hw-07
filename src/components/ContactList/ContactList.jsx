import {useSelector} from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = () => {
    const contacts = useSelector(state => {
        return state.contacts.items;
    });
    const filter = useSelector(state => {
        return state.filters.name;
    });

    const showContacts = contacts.filter(contact => {
        const input = `${contact.name ?? ""} ${contact.number ?? ""}`;
        return input.toLowerCase().includes(filter.toLowerCase());
    });
    return (
        <ul className={css.list}>
            {showContacts.map(item => (
                <li key={item.id}>
                    <Contact id={item.id} name={item.name} phone={item.number} />
                </li>
            ))}
        </ul>
    );
};
export default ContactList;
