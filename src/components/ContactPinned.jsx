import React from 'react';

const ContactPinned = ({ contact, onClear }) => {
  return (
    <div className="contact-pinned">
      <h2>Contacto Destacado</h2>
      {contact ? (
        <>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <button onClick={onClear}>Limpiar</button>
        </>
      ) : (
        <p>Ningún contacto seleccionado</p>
      )}
    </div>
  );
};

export default ContactPinned;
