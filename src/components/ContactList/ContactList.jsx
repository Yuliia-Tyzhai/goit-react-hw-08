import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li className={styles.listItem} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
