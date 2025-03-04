// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import contacts from './data/contacts.json';
import './App.css';

function App() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [selectionHistory, setSelectionHistory] = useState([]);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setSelectionHistory((prevHistory) => {
      const newHistory = [contact, ...prevHistory];
      return newHistory.slice(0, 3); // Mantener solo los últimos 3 contactos seleccionados
    });
  };

  const handleClearContact = () => {
    setSelectedContact(null);
  };

  const handleClearHistory = () => {
    setSelectionHistory([]);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <ContactList
          contacts={contacts}
          onSelectContact={handleSelectContact}
          selectedContact={selectedContact}
        />
        {selectedContact && (
          <div className="contact-detail-container">
            <ContactDetail contact={selectedContact} />
            <button onClick={handleClearContact}>Limpiar Contacto</button>
          </div>
        )}
      </div>
      <div className="selection-history">
        <h3>Historial de Selección</h3>
        <ul>
          {selectionHistory.map((contact, index) => (
            <li key={index} className="history-item">
              {contact.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons">
        <button onClick={handleClearHistory}>Limpiar Historial</button>
      </div>
    </div>
  );
}

export default App;