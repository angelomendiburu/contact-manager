import React, { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import contacts from './data/contacts.json';
import './App.css';

function App() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const clearSelectedContact = () => {
    setSelectedContact(null);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <ContactList contacts={contacts} onSelectContact={setSelectedContact} />
        <ContactPinned contact={selectedContact} onClear={clearSelectedContact} />
      </div>
    </div>
  );
}

export default App;