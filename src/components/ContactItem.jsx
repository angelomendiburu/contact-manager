import React from 'react';

const ContactItem = ({ contact, onClick }) => {
  return (
    <li onClick={onClick}>
      {contact.name} - {contact.phone} - {contact.email}
    </li>
  );
};

export default ContactItem;
