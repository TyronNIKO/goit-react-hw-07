import {useSelector} from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {selectContacts} from "../../redux/contactsSlice";
import {filterValue} from "../../redux/filtersSlice";
const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(filterValue);

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
