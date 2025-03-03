import React from 'react';

const ContactList = ({ contacts, onSelectContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map((contact, index) => (
        <li key={index} onClick={() => onSelectContact(contact)}>
          {contact.name} - {contact.phone}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;