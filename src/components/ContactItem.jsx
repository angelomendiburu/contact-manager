import React from 'react';

const ContactItem = ({ contact, onSelectContact, isSelected }) => {
  return (
    <li
      className={`contact-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectContact(contact)}
    >
      {contact.name} - {contact.phone} - {contact.email}
    </li>
  );
};

export default ContactItem;