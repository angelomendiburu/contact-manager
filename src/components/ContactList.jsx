// src/components/ContactList.jsx
import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onSelectContact, selectedContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          contact={contact}
          onSelectContact={onSelectContact}
          isSelected={contact === selectedContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;